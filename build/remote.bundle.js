webpackJsonp([3],[
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


/***/ }
]);
//# sourceMappingURL=remote.bundle.js.map