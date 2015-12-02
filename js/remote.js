require('iscroll-component/iscroll.css')
require('pull-to-refresh/ptr.css')
require('more-mobile/more.css')
var List = require('../..')
var ALL_DATA = require('../data.json')
var USERS = ALL_DATA.slice(0, 30)
var PREPEND_USERS = ALL_DATA.slice(30, 60)

var scrollable = document.querySelector('.scrollable')

function setCount() {
  var el = document.getElementById('count')
  var ul = scrollable.querySelector('ul')
  ul.style.minHeight = (40 * USERS.length) + 'px'
  el.textContent = ul.querySelectorAll('li').length
}
var template = '<li data-id="{id}">{age} {text | truncate}</li>'

var list = new List(template, scrollable, {
  filters: {
    truncate: function (str) {
      return str.substr(0, 40) + '...'
    }
  },
  moreCount: 8,
  limit: 15
})
