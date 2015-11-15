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
  el.textContent = ul.querySelectorAll('li').length
}
var template = '<li data-id="{id}">{age}</li>'

var list = new List(template, scrollable, {
  filters: {
    truncate: function (str) {
      return str.substr(0, 40) + '...'
    }
  },
  moreCount: 8,
  limit: 15
})

// list.iscroll({handlebar: true})

var curr = 0
list.pullToRefresh(function () {
  return new Promise(function (resolve) {
    var users = PREPEND_USERS.slice(curr, curr + 5)
    setTimeout(function () {
      curr = curr + 5
      resolve(users)
    }, 1000)
  })
})

//list.useMore(function (params) {
//  return new Promise(function (resolve) {
//    var total = params.total
//    var users = ALL_DATA.slice(total, total + 10)
//    setTimeout(function () {
//      resolve(users)
//    }, 1000)
//  })
//})
list.setData(USERS)
setCount()
list.on('change', setCount)
