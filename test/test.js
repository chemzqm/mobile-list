/*global describe, it, beforeEach, afterEach*/
require('./test.css')
var assert = require('assert')
var List = require('..')
var USERS = require('./data.json')
var domify = require('domify')
var template = '<li class="item" data-id="{id}">{age}</li>'
var Touch = require('touch-simulate')

var scrollable
beforeEach(function () {
  scrollable = document.createElement('div')
  scrollable.className = 'scrollable'
  document.body.appendChild(scrollable)
  var ul = document.createElement('ul')
  scrollable.appendChild(ul)
})

afterEach(function () {
  document.body.removeChild(scrollable)
})

describe('List()', function() {
  it('should init with new', function () {
    var list = new List(template, scrollable)
    var p = scrollable.querySelector('ul')
    assert.equal(list.parentNode, p)
  })

  it('should init without new', function () {
    var list = List(template, scrollable)
    var p = scrollable.querySelector('ul')
    assert.equal(list.parentNode, p)
  })

  it('should init with options', function () {
    var list = new List(template, scrollable, {perpage: 10})
    assert.equal(list.params.perpage, 10)
  })
})

describe('onscroll', function() {
  it('should render more data onscroll', function (done) {
    var list = new List(template, scrollable, {
      limit: 12,
      moreCount: 5
    })
    list.setData(USERS)
    assert.equal(list.reactives.length, 12)
    assert.equal(list.curr, 12)
    var h = scrollable.scrollHeight - scrollable.clientHeight
    scrollable.scrollTop = h
    setTimeout(function () {
      assert.equal(list.reactives.length, 17)
      assert.equal(list.curr, 17)
      done()
    }, 120)
  })

  it('should not render more data with no limit', function (done) {
    var list = new List(template, scrollable, {
      moreCount: 5
    })
    list.setData(USERS)
    assert.equal(list.reactives.length, USERS.length)
    var h = scrollable.scrollHeight - scrollable.clientHeight
    scrollable.scrollTop = h
    setTimeout(function () {
      assert.equal(list.reactives.length, USERS.length)
      done()
    }, 100)
  })
})

describe('autoHeight', function () {
  it('should set height value to parentNode', function () {
    var list = new List(template, scrollable, {
      moreCount: 10,
      limit: 10,
      autoHeight: true
    })
    list.setData(USERS.slice(0, 20))
    var ul = scrollable.querySelector('ul')
    assert.equal(ul.style.height, '800px')
  })

  it('should set auto when no more data for render', function () {
    var list = new List(template, scrollable, {
      limit: 10,
      autoHeight: true
    })
    list.setData(USERS.slice(0, 20))
    list.more(10)
    var ul = scrollable.querySelector('ul')
    assert.equal(ul.style.height, 'auto')
  })

  it('should works with filtered data', function () {
    var list = new List(template, scrollable, {
      limit: 10,
      autoHeight: true
    })
    list.setData(USERS)
    list.local()
    list.filter('text', 'a')
    var h = list.filtered.length*40
    var ul = scrollable.querySelector('ul')
    assert.equal(ul.style.height, h + 'px')
  })

  it('should do nothing when can not calculate', function () {
    var el = domify(template)
    el.style.display = 'inline'
    var list = new List(el, scrollable, {
      moreCount: 10,
      limit: 10,
      autoHeight: true
    })
    list.setData(USERS.slice(0, 20))
    var ul = scrollable.querySelector('ul')
    assert.equal(ul.style.height, '')
  })

  it('should works with multiply data per line', function () {
    var el = domify('<li class="item float" data-id="{id}"><button class="remove">remove</button></li>')
    var list = new List(el, scrollable, {
      moreCount: 10,
      limit: 20,
      autoHeight: true
    })
    list.setData(USERS.slice(0, 40))
    var ul = scrollable.querySelector('ul')
    assert.equal(ul.style.height, '800px')
  })
})

describe('.bind(type, selector, handler)', function() {
  it('should bind event', function () {
    var el = domify('<li class="item" data-id="{id}"><button class="remove">remove</button></li>')
    var list = new List(el, scrollable)
    list.setData(USERS)
    var fired
    var li = scrollable.querySelector('li:first-child')
    list.bind('click', '.remove', function (e, model) {
      fired = true
      assert.equal(e.delegateTarget.tagName.toLowerCase(), 'button')
      assert.equal(model.id, li.id)
    })
    li.querySelector('.remove').click()
    assert.equal(fired, true)
  })

  it('should pass extra arguments', function () {
    var el = domify('<li class="item" data-id="{id}"><button class="remove">remove</button></li>')
    var list = new List(el, scrollable)
    list.setData(USERS)
    var fired
    var li = scrollable.querySelector('li:first-child')
    list.bind('click', '.remove', function (e, model, order) {
      fired = true
      assert.equal(order, 'asc')
    }, 'asc')
    li.querySelector('.remove').click()
    assert.equal(fired, true)
  })
})

describe('.sort(field, dir, method)', function() {
  it('should sort on local mode', function () {
    var list = new List(template, scrollable)
    list.local()
    list.setData(USERS)
    list.sort('age', 1)
    var data = list.data
    data.reduce(function (pre, cur) {
      assert(cur.age <= pre.age)
      return cur
    }, {age: Infinity})
  })

  it('should emit on remote mode', function () {
    var list = new List(template, scrollable)
    list.setData(USERS)
    var fired
    list.on('sort', function (params) {
      assert.equal(params.sortField, 'age')
      assert.equal(params.sortDirection, 1)
      fired = true
    })
    list.sort('age', 1)
    assert.equal(fired, true)
  })
})

describe('.filter(field, val)', function() {
  it('should filter data on local mode', function () {
    var list = new List(template, scrollable)
    list.local()
    list.setData(USERS)
    assert.equal(USERS.length, list.data.length)
    list.filter('text', 'a')
    assert.notEqual(USERS.length, list.filtered.length)
    list.filtered.forEach(function (m) {
      assert(/a/.test(m.text))
    })
  })

  it('should emit filter event on remove mode', function () {
    var list = new List(template, scrollable)
    list.setData(USERS)
    var fired
    list.on('filter', function (params) {
      fired = true
      assert.equal(params.filterField, 'text')
      assert.equal(params.filterValue, 'a')
    })
    list.filter('text', 'a')
    assert.equal(typeof list.filtered, 'undefined')
    assert.equal(fired, true)
  })

  it('should set field and value empty when emit with empty filter', function () {
    var list = new List(template, scrollable)
    list.setData(USERS)
    var fired
    list.on('filter', function (params) {
      fired = true
      assert.equal(params.filterField, null)
      assert.equal(params.filterValue, null)
    })
    list.filter('text', '')
    assert.equal(fired, true)
  })
})

describe('.select(n)', function() {
  it('should throw if not perpage defined', function () {
    var err
    var list = new List(template, scrollable)
    list.setData(USERS)
    try {
      list.select(2)
    } catch (e) {
      err = e
    }
    assert(!!err.message)
  })

  it('should select page on local mode', function () {
    var list = new List(template, scrollable, {
      perpage: 10
    })
    list.local()
    list.setData(USERS)
    list.select(1)
    var ids = list.reactives.map(function (r) {
      return r.el.id
    })
    assert.deepEqual(ids, USERS.slice(10, 20).map(function (m) {
      return m.id
    }))
  })

  it('should emit on remote mode', function () {
    var list = new List(template, scrollable, {
      perpage: 20
    })
    list.setData(USERS)
    var fired
    list.on('page', function (params) {
      fired = true
      assert.equal(params.perpage, 20)
      assert.equal(params.curpage, 2)
    })
    list.select(2)
    assert.equal(fired, true)
  })
})

describe('.scrollTo(n)', function() {
  it('should scroll window', function () {
    scrollable.style.overflow = 'auto'
    scrollable.style.height = 'auto'
    var list = new List(template, window, {
      selector: '.scrollable ul'
    })
    list.setData(USERS)
    list.scrollTo(10)
    var supportPageOffset = window.pageYOffset !== undefined
    var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    assert.equal(y, 10)
  })

  it('should scroll element', function () {
    var list = new List(template, scrollable)
    list.local()
    list.setData(USERS)
    list.scrollTo(10)
    assert.equal(scrollable.scrollTop, 10)
  })
})

describe('.iscroll()', function () {

  beforeEach(function () {
    // should have a wrapper
    var wrapper = document.createElement('div')
    var ul = scrollable.querySelector('ul')
    scrollable.appendChild(wrapper)
    wrapper.appendChild(ul)
  })

  it('should works with iscroll', function () {
    var ul = scrollable.querySelector('ul')
    var list = new List(template, scrollable)
    list.iscroll({handler: true})
    list.setData(USERS)
    var is = list._iscroll
    is.refresh()
    assert.equal(is.height, ul.getBoundingClientRect().height)
  })

  it('should able to scroll iscroll', function (done) {
    var list = new List(template, scrollable)
    scrollable.style.overflow = 'hidden'
    list.iscroll({handler: true})
    list.setData(USERS)
    list.scrollTo(100)
    var ul = scrollable.querySelector('ul')
    // 100ms to scroll
    setTimeout(function () {
      var ur = ul.getBoundingClientRect()
      var r = scrollable.getBoundingClientRect()
      assert.equal(r.top - ur.top, 100)
      done()
    }, 200)
  })

  it('should refresh iscroll on data change', function (done) {
    var ul = scrollable.querySelector('ul')
    var list = new List(template, scrollable)
    list.iscroll({handler: true})
    var is = list._iscroll
    list.setData(USERS.slice(0, 20))
    setTimeout(function () {
      assert.equal(is.height, ul.getBoundingClientRect().height)
      done()
    }, 10)
  })

  it('should works with pull-to-refresh with reject', function (done) {
    var ul = scrollable.querySelector('ul')
    var list = new List(template, scrollable)
    list.iscroll({handler: true})
    var fired
    list.pullToRefresh(function (params) {
      fired = true
      assert(!!params.pullTimestamp)
      return new Promise(function (resolve) {
        resolve(USERS.slice(20, 21))
      })
    })
    list.setData(USERS.slice(0, 20))
    var t = Touch(ul, {speed: 300})
    t.moveDown(80).then(function () {
      assert.equal(fired, true)
      var li = scrollable.querySelector('.item:first-child')
      assert.equal(li.id, USERS[20].id)
      done()
    })
  })

  it('should works with pull-to-refresh with reject', function (done) {
    var ul = scrollable.querySelector('ul')
    var list = new List(template, scrollable)
    list.iscroll({handler: true})
    var fired
    list.pullToRefresh(function () {
      fired = true
      return Promise.reject(null)
    })
    list.setData(USERS.slice(0, 20))
    var t = Touch(ul, {speed: 300})
    t.moveDown(80).then(function () {
      assert.equal(fired, true)
      done()
    })
  })
})

describe('.refresh()', function() {
  it('should refresh data from ptr on refresh', function () {
    var list = new List(template, scrollable)
    list.iscroll({handler: true})
    var fired
    list.pullToRefresh(function () {
      fired = true
      return Promise.resolve([])
    })
    list.refresh()
    setTimeout(function () {
      var d = Date.now() - list.pullTimestamp
      assert(d < 10)
    }, 0)
    assert.equal(fired, true)
  })
})

describe('.useMore()', function() {
  it('should works with more', function (done) {
    var list = new List(template, scrollable)
    var fired
    list.useMore(function () {
      fired = true
      return Promise.resolve(USERS.slice(20, 25))
    })
    list.setData(USERS.slice(0, 20))
    scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight
    setTimeout(function () {
      assert.equal(fired, true)
      var li = scrollable.querySelector('.item:last-child')
      assert.equal(li.id, USERS[24].id)
      done()
    }, 200)
  })

  it('should works with more and iscroll', function (done) {
    // should have a wrapper
    var wrapper = document.createElement('div')
    var ul = scrollable.querySelector('ul')
    scrollable.appendChild(wrapper)
    wrapper.appendChild(ul)
    scrollable.style.overflow = 'hidden'
    var list = new List(template, scrollable)
    var fired
    list.useMore(function () {
      fired = true
      return Promise.resolve(USERS.slice(20, 25))
    })
    list.iscroll()
    list.setData(USERS.slice(0, 20))
    scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight
    setTimeout(function () {
      assert.equal(fired, true)
      var li = scrollable.querySelector('.item:last-child')
      assert.equal(li.id, USERS[24].id)
      done()
    }, 300)
  })

  it('should disable more with no data', function (done) {
    var list = new List(template, scrollable)
    var fired
    list.useMore(function () {
      fired = true
      return Promise.resolve([])
    })
    list.setData(USERS.slice(0, 20))
    scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight
    setTimeout(function () {
      assert.equal(fired, true)
      assert.equal(list._more._disabled, true)
      done()
    }, 200)
  })

  it('should do nothing on reject', function (done) {
    var list = new List(template, scrollable)
    var fired
    list.useMore(function () {
      fired = true
      return Promise.reject(null)
    })
    list.setData(USERS.slice(0, 20))
    scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight
    setTimeout(function () {
      assert.equal(fired, true)
      assert.notEqual(list._more._disabled, true)
      done()
    }, 200)
  })
})

describe('.setTotal', function() {
  it('should set total', function () {
    var list = new List(template, scrollable)
    list.setData(USERS)
    list.setTotal(100)
    assert.equal(list.total, 100)
  })

  it('should throw on local mode', function () {
    var list = new List(template, scrollable)
    list.local()
    list.setData(USERS)
    var err
    try {
      list.setTotal(100)
    } catch (e) {
      err = e
    }
    assert(!!err.message)
  })
})

describe('.remove()', function() {
  it('should ok with called more than once', function () {
    var list = new List(template, scrollable)
    list.local()
    list.setData(USERS)
    list.remove()
    list.remove()
    list.remove()
    assert.equal(list._removed, true)
  })

  it('should emit remove event', function () {
    var list = new List(template, scrollable)
    list.local()
    list.setData(USERS)
    var fired
    list.on('remove', function () {
      fired = true
    })
    list.remove()
    assert.equal(fired, true)
  })

  it('should unbind events', function () {
    var list = new List(template, scrollable)
    list.setData(USERS)
    var fired
    list.on('sort', function () {
      fired = true
    })
    list.remove()
    list.sort('age', 1)
    assert.notEqual(fired, true)
  })

  it('should unbind user defined events', function () {
    var el = domify('<li class="item" data-id="{id}"><button class="remove">remove</button></li>')
    var list = new List(el, scrollable)
    list.setData(USERS)
    var fired
    var li = scrollable.querySelector('li:first-child')
    list.bind('click', '.remove', function () {
      fired = true
    })
    list.remove()
    li.querySelector('.remove').click()
    assert.notEqual(fired, true)
  })
})

