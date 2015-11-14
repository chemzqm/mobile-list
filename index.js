require('setimmediate.js')
var inherits = require('inherits')
var events = require('events')
var Iscroll = require('iscroll')
var Emitter = require('emitter')
var ListRender = require('list-render')
var More = require('more')
var Ptr = require('pull-to-refresh')
var throttle = require('throttleit')
var event = require('event')

/**
 * List constructor
 *
 * @param {Element | String} template
 * @param {Element} scrollable
 * @param {Object} option
 * @api public
 */
function List(template, scrollable, option) {
  if (!(this instanceof List)) return new List(template, scrollable, option)
  var selector = option.parentSelector || 'ul'
  delete option.parentSelector
  var parentNode = this.parentNode = scrollable.querySelector(selector)
  this.scrollable = scrollable
  // super constructor
  ListRender.call(this, template, parentNode, option)
  this.handlers = {}
  this.params = {}
  this.events = events(parentNode, this.handlers)
  this._onscroll = this.onscroll.bind(this)
  event.bind(scrollable, 'scroll', this._onscroll)
  this.total = 0
}

inherits(List, ListRender)

Emitter(List.prototype)

/**
 * Use iscroll for scrollable element
 *
 * @param {Object} opt
 * @api public
 */
List.prototype.iscroll = function (opt) {
  this._iscroll = Iscroll(this.scrollable, opt)
}

/**
 * Handler of `scroll` event from scrollable
 *
 * @api public
 */
List.prototype.onscroll = throttle(function () {
  if (this.limit === Infinity) return
  var last = this.parentNode.lastElementChild
  if (!last) return
  var b
  do {
    // hidden element has 0 bottom
    b = last.getBoundingClientRect().bottom
    if (b) break
    last = last.previousElementSibling
  } while(last)
  var sb
  if (this.scrollable === 'window') {
    sb = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  } else {
    sb = this.scrollable.getBoundingClientRect().bottom
  }
  if (b - sb < 10) {
    this.more(this.moreCount || 10)
  }
} ,100)

/**
 * User pullToRefresh for data prepend
 *
 * @param {Object} opt
 * @param  {Function}  cb Callback function
 * @api public
 */
List.prototype.pullToRefresh = function (opt, cb) {
 if (typeof opt === 'function') {
  cb = opt
  opt = {}
 }
 var self = this
 var callback = function () {
  var params = assign({pullTimestamp: self.pullTimestamp}, self.params)
  var p = cb(params)
   return new Promise(function (resolve, reject) {
      p.then(function (arr) {
        if (Array.isArray(arr)) {
          self.prependData(arr)
        }
        self.pullTimestamp = Date.now()
        resolve()
      }, reject)
   })
 }
 this._ptr = Ptr(this.scrollable, opt,callback)
}

/**
 * Use more to load more data
 *
 * @param  {Function}  cb
 * @api public
 */
List.prototype.useMore = function (cb) {
  var self = this
  var callback = function () {
    if (self._iscroll) self._iscroll.refresh()
    var list = self.filtered || self.data
    var params = assign({total: list.length}, self.params)
    var p = cb(params)
    return new Promise(function (resolve, reject) {
      p.then(function (arr) {
        if (Array.isArray(arr) && arr.length) {
          self.appendData(arr)
        } else {
          // success without data
          self._more.disable()
          if (self._iscroll) self._iscroll.refresh()
        }
        resolve()
      }, reject)
    })
  }
  this._more = More(this.parentNode, callback, this.scrollable)
  this._more.delta = 100
}


/**
 * Override setData, add pullTimestamp
 *
 * @api public
 */
List.prototype.setData = function () {
  if (!this.pullTimestamp) this.pullTimestamp = Date.now()
  ListRender.prototype.setData.apply(this, arguments)
}

/**
 * Do something on dom change
 *
 * @api private
 */
List.prototype.onchange = function () {
  var self = this
  if (this._local) {
    var list = this.filtered || this.data
    this.total = list.length
  }
  this.emit('change')
  if (this._iscroll) {
    setImmediate(function () {
      self._iscroll.refresh()
    })
  }
}

/**
 * Set the total to `count`
 * Used for remote mode only
 *
 * @param  {Number}  n
 * @api public
 */
List.prototype.setTotal = function (count) {
  if (this._local) throw new Error('setTotal expect to work at remote mode')
  this.total = count
}

/**
 * Delegate event `type` to `selector` with `handler`,
 * handler is called with event and a reactive model with content of
 * delegate target
 *
 * @param {String} type
 * @param {String} selector
 * @param {Function} handler
 * @api public
 */
List.prototype.bind = function (type, selector, handler) {
  var name = type + ' ' + selector
  var args = [].slice.call(arguments, 3)
  var self = this
  this.handlers[name] = function (e) {
    var el = e.delegateTarget
    var model = self.findModel(el)
    var a = [e, model].concat(args)
    handler.apply(e.target, a)
  }
  this.events.bind(name, name)
}

/**
 * Sort the data by field, direction or method, when it's remote mode(default mode), emit event only
 *
 * @param {String} field
 * @param {Number} dir
 * @param {Function} method
 * @api public
 */
List.prototype.sort = function (field, dir, method) {
  dir = parseInt(dir, 10)
  if (this._local) {
    this.sortData(field, dir, method)
  } else {
    this.params.sortField = field
    this.params.sortDirection = dir
    var params = assign({curpage: this.curpage}, this.params)
    this.emit('sort', params)
  }
}

/**
 * Filter the data with field and value
 *
 * @param {String} field
 * @param {String | Function} val
 * @api public
 */
List.prototype.filter = function (field, val) {
  this.scrollable.scrollTop = 0
  if (this._local) {
    this.filterData(field, val)
  } else {
    var params = this.params
    if (!field || val === '' || val == null) {
      params.filterField = null
      params.filterValue = null
    } else {
      params.filterField = field
      params.filterValue = val
    }
    this.curpage = 0
    params = assign({curpage: 0}, params)
    this.emit('filter', params)
  }
}

/**
 * Select page `n`
 *
 * @param  {Element}  n
 * @api public
 */
List.prototype.select = function (n) {
  if (this._local) {
    ListRender.prototype.select.apply(this, arguments)
  } else {
    this.curpage = n
    var params = this.params
    params = assign({curpage: this.curpage}, params)
    this.emit('page', params)
  }
}

/**
 * Make ptr refresh
 *
 * @api public
 */
List.prototype.refresh = function () {
  if (this._ptr) this._ptr.refresh()
}

/**
 * Works in local mode
 *
 * @api public
 */
List.prototype.local = function () {
  this._local = true
}

/**
 * Clean the list and unbind all event listeners
 *
 * @api public
 */
List.prototype.remove = function () {
  if (this._removed) return
  ListRender.prototype.remove.call(this)
  if (this._iscroll) this._iscroll.unbind()
  if (this._more) this._more.remove()
  if (this._ptr) this._ptr.unbind()
  this.emit('remove')
  event.unbind(this.scrollable, 'scroll', this._onscroll)
  this.events.unbind()
  this.off()
}

/**
 * Assign props
 *
 * @param {Object} to
 * @param {Object} from
 * @return {undefined}
 * @api public
 */
function assign(to, from) {
  Object.keys(from).forEach(function (k) {
    to[k] = from[k]
  })
  return to
}

module.exports = List
