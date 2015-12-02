require('iscroll-component/iscroll.css')
require('pull-to-refresh/ptr.css')
require('more-mobile/more.css')
var List = require('../..')
var ALL_DATA = require('../data.json')
var USERS = ALL_DATA.slice(0, 60)

var scrollable = document.querySelector('.scrollable')

function setCount() {
  var el = document.getElementById('count')
  var ul = scrollable.querySelector('ul')
  el.textContent = ul.querySelectorAll('li').length
}
var template = '<li data-id="{id}">{age}</li>'

var list = new List(template, scrollable, {
  filters: {
    truncate: function (str) {
      return str.substr(0, 40) + '...'
    }
  },
  autoHeight: true,
  moreCount: 10,
  limit: 30
})

// list.iscroll({handlebar: true})

setTimeout(function () {
  list.setData(USERS)
  var el = document.getElementById('loading')
  el.parentNode.removeChild(el)
}, 500)
list.on('change', setCount)
