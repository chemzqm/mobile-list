require('iscroll-component/iscroll.css')
require('pull-to-refresh/ptr.css')
require('more-mobile/more.css')
var List = require('../..')
var ALL_DATA = require('../data.json')
var event = require('event')
var tap = require('tap-event')

var scrollable = document.querySelector('.scrollable')
var ul = scrollable.querySelector('ul')

function setCount() {
  var el = document.getElementById('count')
  el.textContent = ul.querySelectorAll('li').length
}
var template = '<li data-id="{id}">{age} <span class="text">{text}</span></li>'

var list = new List(template, scrollable, {
  moreCount: 8,
  limit: 20
})
list.local()


list.on('change', function () {
  setCount()
})

list.setData(ALL_DATA)

var $ = function (id) {
  return document.getElementById(id)
}
event.bind($('content'), 'input', function (e) {
  var v = e.target.value
  list.filter('text', v)
})

event.bind($('sort'), 'change', function (e) {
  var v = e.target.value
  if (v) {
    list.sort(v, $('order').value)
  }
})

event.bind($('order'), 'change', function (e) {
  var v = e.target.value
  list.sort($('sort').value, v)
})

list.bind('touchstart', '.text', tap(function (e, model) {
  model.age = model.age + 1
}))

