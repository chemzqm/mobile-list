webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(5)
	__webpack_require__(7)
	__webpack_require__(68)
	var Pager = __webpack_require__(70)
	var List = __webpack_require__(9)
	var ALL_DATA = __webpack_require__(67)
	var event = __webpack_require__(15)
	
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
	


/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./pager.css", function() {
				var newContent = require("!!./../css-loader/index.js!./pager.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".pager {\n  margin-top: 10px;\n  padding: 0;\n  font-size: 14px;\n}\n\n.pager li {\n  display: inline-block;\n}\n\nli.prev.pager-hide a,\nli.next.pager-hide a {\n  color: #999;\n  border-color: #999;\n}\n.pager li.active a {\n  font-weight: bold;\n  border-color: #ddd;\n}\n.pager li a {\n  text-decoration: none;\n  border-radius: 3px;\n  padding: 3px 8px;\n  margin: 0 2px;\n  color: #444;\n}\n\n.pager li.prev a,\n.pager li.next a{\n  font-weight: bolder;\n  border: 1px solid #eee;\n}\n\n\n", ""]);
	
	// exports


/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	var Emitter = __webpack_require__(29)
	var events = __webpack_require__(14)
	var domify = __webpack_require__(51)
	var query = __webpack_require__(19)
	var classes = __webpack_require__(60)
	var tap = __webpack_require__(71)
	var template = __webpack_require__(72)
	
	var defineProperty = Object.defineProperty
	/**
	 * Init pager with optional list for bind
	 *
	 * @param {Object} list
	 * @api public
	 */
	function Pager (list, opts) {
	  if (!(this instanceof Pager)) return new Pager(list)
	  var el = this.el = domify(template)
	  el.className = 'pager'
	  this.events = events(el, this)
	  this.events.bind('click li > a')
	  this.events.bind('touchstart li > a', 'ontap')
	  if (list) this.bind(list, opts)
	}
	
	Emitter(Pager.prototype)
	
	/**
	 * Select the previous page.
	 *
	 * @api public
	 */
	
	Pager.prototype.prev = function () {
	  this.show(Math.max(0, this.current - 1))
	}
	
	Pager.prototype.bind = function (list, opts) {
	  opts = opts || {}
	  this.perpage(list[opts.perpage || 'perpage'] || 5)
	  this.total(list.total || 0)
	  this.select(list.curpage || 0)
	  var self = this
	  this.on('show', function (n) {
	    list[opts.select || 'select'](n)
	  })
	  this.defineProperty(list, opts, 'perpage', function () {
	    return self._perpage
	  }, function (v) {
	    self.perpage(v)
	  })
	  this.defineProperty(list, opts, 'total', function () {
	    return self._total
	  }, function (v) {
	    self.total(v)
	    self.select(self.current)
	  })
	  this.defineProperty(list, opts, 'curpage', function () {
	    return self.current
	  }, function (v) {
	    self.select(v)
	  })
	}
	
	Pager.prototype.defineProperty = function (list, opts, name, get, set) {
	  defineProperty(list, opts[name] || name, {
	    set: set,
	    get: get
	  })
	}
	
	/**
	 * Select the next page.
	 *
	 * @api public
	 */
	
	Pager.prototype.next = function () {
	  this.show(Math.min(this.pages() - 1, this.current + 1))
	}
	
	Pager.prototype.onclick = function (e) {
	  e.preventDefault()
	  var el = e.target.parentNode
	  if (classes(el).has('pager-hide')) return
	  if (classes(el).has('prev')) return this.prev()
	  if (classes(el).has('next')) return this.next()
	  this.show(el.textContent - 1)
	}
	
	Pager.prototype.ontap = tap(Pager.prototype.onclick)
	
	/**
	 * Return the total number of pages.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Pager.prototype.pages = function () {
	  return Math.ceil(this._total / this._perpage)
	}
	
	/**
	 * Set total items count
	 *
	 * @param {String} n
	 * @api public
	 */
	Pager.prototype.total = function (n) {
	  this._total = n
	  return this
	}
	
	Pager.prototype.select = function (n) {
	  n = Number(n)
	  if (n !== this.current) this.emit('change', n)
	  this.current = Number(n)
	  this.render()
	  return this
	}
	
	/**
	 * Set perpage count to n
	 *
	 * @param {Number} n
	 * @api public
	 */
	Pager.prototype.perpage = function (n) {
	  this._perpage = n
	  return this
	}
	
	/**
	 * Select page n and emit `show` event with n
	 *
	 * @param {String} n
	 * @api public
	 */
	Pager.prototype.show = function (n) {
	  this.select(n)
	  this.emit('show', n)
	  return this
	}
	
	/**
	 * limit the pagenation li 
	 *
	 * @param {Number} count
	 * @return {this}
	 * @api public
	 */
	Pager.prototype.limit = function (count) {
	  this._limit = Number(count)
	  return this
	}
	
	/**
	 * Unbind events and remove nodes
	 *
	 * @return {undefined}
	 * @api public
	 */
	Pager.prototype.remove = function () {
	  this.off()
	  this.events.unbind()
	  if (this.el.parentNode) {
	    this.el.parentNode.removeChild(this.el)
	  }
	}
	
	Pager.prototype.render = function () {
	  var el = this.el
	  var limit = this._limit || Infinity
	  var curr = this.current
	  var pages = this.pages()
	  var prev = query('.prev', el)
	  var next = query('.next', el)
	  var links = ''
	
	  if (pages == 0) {
	    el.style.display = 'none'
	  } else {
	    el.style.display = 'block'
	  }
	
	  // remove old
	  var lis = [].slice.call(el.children)
	  for (var i = 0, len = lis.length; i < len; i++) {
	    var li = lis[i]
	    if (classes(li).has('page')) {
	      el.removeChild(li)
	    }
	  }
	
	  // page links
	  for (i = 0; i < pages; ++i) {
	    var n = i + 1
	    if (limit && n === limit + 1) {
	      links += '<li class="dots">...</li>'
	    }
	    if (limit && (n > limit && n !== pages )) {
	      continue
	    }
	    links += curr === i
	      ? '<li class="page active"><a href="#">' + n + '</a></li>'
	      : '<li class="page"><a href="#">' + n + '</a></li>'
	  }
	
	  // insert
	  if (links) el.insertBefore(domify(links), next)
	
	  // prev
	  if (curr) classes(prev).remove('pager-hide')
	  else classes(prev).add('pager-hide')
	
	  // next
	  if (curr < pages - 1) classes(next).remove('pager-hide')
	  else classes(next).add('pager-hide')
	}
	
	module.exports = Pager
	


/***/ },

/***/ 71:
/***/ function(module, exports) {

	var endEvents = [
	  'touchend'
	]
	
	module.exports = Tap
	
	// default tap timeout in ms
	Tap.timeout = 200
	
	function Tap(callback, options) {
	  options = options || {}
	  // if the user holds his/her finger down for more than 200ms,
	  // then it's not really considered a tap.
	  // however, you can make this configurable.
	  var timeout = options.timeout || Tap.timeout
	
	  // to keep track of the original listener
	  listener.handler = callback
	
	  return listener
	
	  // el.addEventListener('touchstart', listener)
	  function listener(e1) {
	    // tap should only happen with a single finger
	    if (!e1.touches || e1.touches.length > 1) return
	
	    var el = e1.target
	    var context = this
	    var args = arguments;
	
	    var timeout_id = setTimeout(cleanup, timeout)
	
	    el.addEventListener('touchmove', cleanup)
	
	    endEvents.forEach(function (event) {
	      el.addEventListener(event, done)
	    })
	
	    function done(e2) {
	      // since touchstart is added on the same tick
	      // and because of bubbling,
	      // it'll execute this on the same touchstart.
	      // this filters out the same touchstart event.
	      if (e1 === e2) return
	
	      cleanup()
	
	      // already handled
	      if (e2.defaultPrevented) return
	
	      // overwrite these functions so that they all to both start and events.
	      var preventDefault = e1.preventDefault
	      var stopPropagation = e1.stopPropagation
	
	      e1.stopPropagation = function () {
	        stopPropagation.call(e1)
	        stopPropagation.call(e2)
	      }
	
	      e1.preventDefault = function () {
	        preventDefault.call(e1)
	        preventDefault.call(e2)
	      }
	
	      // calls the handler with the `end` event,
	      // but i don't think it matters.
	      callback.apply(context, args)
	    }
	
	    // cleanup end events
	    // to cancel the tap, just run this early
	    function cleanup(e2) {
	      // if it's the same event as the origin,
	      // then don't actually cleanup.
	      // hit issues with this - don't remember
	      if (e1 === e2) return
	
	      clearTimeout(timeout_id)
	
	      el.removeEventListener('touchmove', cleanup)
	
	      endEvents.forEach(function (event) {
	        el.removeEventListener(event, done)
	      })
	    }
	  }
	}


/***/ },

/***/ 72:
/***/ function(module, exports) {

	module.exports = "<ul class=\"pager\">\n  <li class=\"prev\"><a href=\"#\">&lsaquo;</a></li>\n  <li class=\"next\"><a href=\"#\">&rsaquo;</a></li>\n</ul>\n";

/***/ }

});
//# sourceMappingURL=local.bundle.js.map