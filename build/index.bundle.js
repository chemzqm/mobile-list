webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(5)
	__webpack_require__(7)
	var List = __webpack_require__(11)
	var ALL_DATA = __webpack_require__(63)
	var USERS = ALL_DATA.slice(0, 30)
	var PREPEND_USERS = ALL_DATA.slice(30, 60)
	
	var scrollable = document.querySelector('.scrollable')
	
	function setCount() {
	  var el = document.getElementById('count')
	  var ul = scrollable.querySelector('ul')
	  el.textContent = ul.querySelectorAll('li').length
	}
	var template = '<li data-id="{id}">{age} {text | truncate}</li>'
	
	var list = new List(template, scrollable, {
	  filters: {
	    truncate: function (str) {
	      return str.substr(0, 40) + '...'
	    }
	  },
	  autoHeight: true,
	  moreCount: 8,
	  limit: 15
	})
	
	list.iscroll({handlebar: true})
	
	var curr = 0
	list.pullToRefresh(function () {
	  return new Promise(function (resolve) {
	    var users = PREPEND_USERS.slice(curr, curr + 10)
	    console.log(users.length)
	    setTimeout(function () {
	      curr = curr + 10
	      resolve(users)
	    }, 1000)
	  })
	})
	
	list.useMore(function (params) {
	  return new Promise(function (resolve) {
	    var total = params.total
	    var users = ALL_DATA.slice(total, total + 10)
	    setTimeout(function () {
	      resolve(users)
	    }, 1000)
	  })
	})
	list.setData(USERS)
	setCount()
	list.on('change', setCount)


/***/ }
]);
//# sourceMappingURL=index.bundle.js.map