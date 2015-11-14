require('iscroll-component/iscroll.css')
require('pull-to-refresh/ptr.css')
require('more-mobile/more.css')
require('component-pager/pager.css')
var Pager = require('pager')
var List = require('../..')
var ALL_DATA = require('../data.json')
var event = require('event')

var scrollable = document.querySelector('.scrollable')
var ul = scrollable.querySelector('ul')

function setCount() {
  var el = document.getElementById('count')
  el.textContent = ul.querySelectorAll('li').length
}
var template = '<li data-id="{id}">{age} <span class="text">{text}</span><button class="remove" style="float:right">remove</button></li>'

var list = new List(template, scrollable, {
  empty: '<div style="text-align: center;height: 200px;line-height:200px;">no data</div>',
  moreCount: 15,
  limit: 10,
  autoHeight: true,
  perpage: 20
})
var pager = Pager(list)
ul.parentNode.insertBefore(pager.el, ul.nextElementSibling)
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

list.bind('click', '.text', function (e, model) {
  model.age = model.age + 1
})

list.bind('click', 'button.remove', function (e, model) {
  model.remove()
})

