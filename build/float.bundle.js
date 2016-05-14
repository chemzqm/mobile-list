webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(5)
	__webpack_require__(7)
	var List = __webpack_require__(9)
	var ALL_DATA = __webpack_require__(67)
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


/***/ }
]);
//# sourceMappingURL=float.bundle.js.map