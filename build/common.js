/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		4:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./iscroll.css", function() {
				var newContent = require("!!./../css-loader/index.js!./iscroll.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".iscroll-handlebar {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  transition: background-color 0.2s ease-out, transform 0.1s ease-out,width 0.1s ease-out, height 0.1s ease-out;\n  width: 4px;\n  border-radius: 2px;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 9999;\n  height: 0px;\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./ptr.css", function() {
				var newContent = require("!!./../css-loader/index.js!./ptr.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'ptr';\n  src: url('data:application/octet-stream;base64,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') format('woff'),\n       url('data:application/octet-stream;base64,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sCYrLbA7LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEmARQrLbA8LLEIBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEmARQrLbA9LLAwKy6xJgEUKy2wPiywMSshIyAgPLAEI0IjOLEmARQrsARDLrAmKy2wPyywABUgR7AAI0KyAAEBFRQTLrAsKi2wQCywABUgR7AAI0KyAAEBFRQTLrAsKi2wQSyxAAEUE7AtKi2wQiywLyotsEMssAAWRSMgLiBGiiNhOLEmARQrLbBELLAII0KwQystsEUssgAAPCstsEYssgABPCstsEcssgEAPCstsEgssgEBPCstsEkssgAAPSstsEossgABPSstsEsssgEAPSstsEwssgEBPSstsE0ssgAAOSstsE4ssgABOSstsE8ssgEAOSstsFAssgEBOSstsFEssgAAOystsFIssgABOystsFMssgEAOystsFQssgEBOystsFUssgAAPistsFYssgABPistsFcssgEAPistsFgssgEBPistsFkssgAAOistsFossgABOistsFsssgEAOistsFwssgEBOistsF0ssDIrLrEmARQrLbBeLLAyK7A2Ky2wXyywMiuwNystsGAssAAWsDIrsDgrLbBhLLAzKy6xJgEUKy2wYiywMyuwNistsGMssDMrsDcrLbBkLLAzK7A4Ky2wZSywNCsusSYBFCstsGYssDQrsDYrLbBnLLA0K7A3Ky2waCywNCuwOCstsGkssDUrLrEmARQrLbBqLLA1K7A2Ky2wayywNSuwNystsGwssDUrsDgrLbBtLCuwCGWwAyRQeLABFTAtAAAAS7gAyFJYsQEBjlm5CAAIAGMgsAEjRLADI3CyBCgJRVJEsgoCByqxBgFEsSQBiFFYsECIWLEGA0SxJgGIUVi4BACIWLEGAURZWVlZuAH/hbAEjbEFAEQAAA==') format('truetype');\n}\n\n.ptr_scrollable {\n  position: relative;\n  overflow-y: visible;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ptr_box {\n  position: absolute;\n  top: -40px;\n  display: block;\n  height: 40px;\n  left: 0px;\n  right: 0;\n  overflow: hidden;\n}\n\n.ptr_box .ptr_container {\n  position: relative;\n  width: 120px;\n  margin: auto;\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n\n.ptr_box .ptr_text {\n  font-size: 14px;\n}\n\n.ptr_box .ptr_image {\n  position: absolute;\n  top: 0px;\n  left: 12px;\n  height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-transform-origin: center center;\n  -webkit-transition: -webkit-transform .2s linear;\n  transition: -webkit-transform .2s linear;\n}\n\n.ptr_box .ptr_image:before {\n  font-family: \"ptr\";\n  font-size: 22px;\n  text-align: center;\n  line-height: 40px;\n  content: '\\E802';\n}\n\n.ptr_box .ptr_image.ptr_rotate {\n  -webkit-transform: translate3d(0, 0, 0) rotate(180deg);\n}\n\n.ptr_box .ptr_image.ptr_loading {\n  animation: spin 0.8s infinite linear;\n}\n\n.ptr_box .ptr_image.ptr_loading:before {\n  content: '\\E800';\n  font-size: 16px;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: translate3d(0, 0, 0) rotate(0deg);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0) rotate(360deg);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./more.css", function() {
				var newContent = require("!!./../css-loader/index.js!./more.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".more-loading {\n  margin: 10px 0;\n  padding: 0 10px;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: sans-serif;\n  text-align: center;\n  color: #999;\n  display: none;\n  height: 22px;\n}\n\n.more-loading .more-refresh {\n  background: url(" + __webpack_require__(9) + ") no-repeat;\n  height: 14px;\n  width: 14px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.more-loading .more-spin {\n  -webkit-animation: more-spin 2s infinite linear;\n  animation: more-spin 2s infinite linear;\n  display: inline-block;\n}\n\n@media all and (-webkit-min-device-pixel-ratio: 1.5) {\n  .more-loading .more-refresh {\n    background: url(" + __webpack_require__(10) + ") no-repeat;\n    -webkit-background-size: contain;\n    background-size: contain;\n  }\n}\n\n@keyframes more-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAD5SURBVBjTXcg9K4VhAADQ816Pz+5AkpQFSUr+gEJZDTbl/oA3E5OUyWCwmD1YMEgZDDYlw5WJshgw0BW3i8GifL1sxBlPApFEs37datw4VWPciqeESJ0xk3p9IVHyKmfUY4g0mDHtwqJz70ZMqXcCAQXTdswrodmYB9UqMpLYadeDgnIqUqsFvHmUBUPaLSlDyqtbP4IeH85If08kb9BtsOfStf86LNsMaVHx70fok1cKkSptavHhznsKTSZUHObQZN2RfQVVRBrNGrbqIiCnRat7FZ1y+hQM27AmC0i8ONBqQeZLtbI5655TAZ+2bMsb0OXTlWPXshTfSUZN5aSoWFkAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC40LjI5PmtDvAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0wNS0yMFQxOToyOTozNSswODowMGuOqIwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMDUtMjBUMTU6NDI6NTArMDg6MDAEa75fAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAABJRU5ErkJggg=="

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDE0LjQuMjk+a0O8AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAmVJREFUSIm91k+oVVUUx/HPUSkos1KEwAeVoxAzSiWpgWDQJEFJbFIOGq0nOlSTHIgOH0k2ibeaNXpIVIhSwYMXkYlFNIpykqgUDnQiamKop8E5F/f7c/88ercfbFj89t7ru7l3nb22uq4NQ5n5eGYeaWOZqa5rSwbZPD4+XlVVtQGbsBZPtuMaLuInTEXE9RYwgq9wHYfLXD2BmbkUu7EHT/c5153MPIkv8AFGcGbmoq7AzHwNn2JVH1BHD+OtdnTVLGD7872Po1hUTN3EJH7BFdzBCqzB63hmkFPNAlZVNYZ9hXWjhY9HxM25kmTmC/gBj84LmJnvzoCdxa6IuNAtQWZu0hRIX9g0YGY+i4+KuSlsjYjbPWBbcBJLB4FNA+IYHmvjy3izFwwiYqrYM5AWtSddjW2Fv7vzTS20OlW4s4h/q+v662HASuCWwpsYHR0dzn1XANcV3tlhwXhQNCsK76+FSp6ZT+BgYR3sAH/GQ228kMWyHO/NAkbEKwsIKfVUEV9l+l05DL1UxBf+D+COIv5+qMDMXI/NhTXBHN0iM5dhcY9ctyLinz6wxUhUrXVO09bmbMBn8HyXXN9hK3oCNR1/fRvfV3Sggd40rSaxPSL+7rYgM5fgQ+wt7OOaXjkv4CS29WlVL+JjzUOro1M4UK4bFPgqPsnMb/A7/tT8zyN4Gds193FV7PlW07zvZea8gY/gnXb0012M4XBE3J052Qt4Ap9jPzYOALqP0zgUEb92W9QNeAJvR8Q9fJaZz+ENzXe1Gis1lXoFf+BHfBkRl/qdai7gBMZaGIiI8ziveYb8J/0LrZ6vNaZkKKgAAAAASUVORK5CYII="

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {__webpack_require__(14)
	var inherits = __webpack_require__(15)
	var events = __webpack_require__(16)
	var Iscroll = __webpack_require__(22)
	var Emitter = __webpack_require__(31)
	var ListRender = __webpack_require__(39)
	var More = __webpack_require__(52)
	var Ptr = __webpack_require__(57)
	var throttle = __webpack_require__(37)
	var event = __webpack_require__(17)
	var computedStyle = __webpack_require__(30)
	
	/**
	 * List constructor
	 *
	 * `option` optional option for [list-render](https://github.com/chemzqm/list-render)
	 * `option.selector` selector for parentNode of repeat template, default `ul`
	 * `option.delegate` delegate object for [reactive](https://github.com/chemzqm/reactive-lite)
	 * `option.bindings` bindings object for [reactive](https://github.com/chemzqm/reactive-lite)
	 * `option.filters` filters object for [reactive](https://github.com/chemzqm/reactive-lite)
	 * `option.model` model class used for generate model
	 * `option.empty` String or Element rendered in parentNode when internal data list is empty
	 * `option.limit` the limit number for render when `setData()` (default no limit)
	 * `option.moreCount` works with `option.limit` it limit count of items to render with `.more(n)` method when last item visible on scroll, default 10
	 * `option.autoHeight` set the height of parentNode even if data not rendered (need limit to work, items should have same height)
	 *
	 * @param {Element | String} template
	 * @param {Element} scrollable
	 * @param {Object} option
	 * @api public
	 */
	function List(template, scrollable, option) {
	  if (!(this instanceof List)) return new List(template, scrollable, option)
	  option = option || {}
	  var selector = option.selector || 'ul'
	  var parentNode = (scrollable === window)? document.querySelector(selector) : scrollable.querySelector(selector)
	  this.padding = {
	    top: parseInt(computedStyle(parentNode, 'paddingTop'), 10),
	    bottom: parseInt(computedStyle(parentNode, 'paddingBottom'), 10)
	  }
	  this.scrollable = scrollable
	  // super constructor
	  ListRender.call(this, template, parentNode, option)
	  this.handlers = {}
	  this.params = {perpage: option.perpage}
	  this.events = events(parentNode, this.handlers)
	  this._onscroll = this.onscroll.bind(this)
	  event.bind(scrollable, 'scroll', this._onscroll)
	  this.total = 0
	  if (this.autoHeight) {
	    this._setListHeight = this.setListHeight.bind(this)
	    // should bind to scrollable? may have performance influence
	    event.bind(window, 'resize', this._setListHeight)
	  }
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
	 * Render more data when bottom close to scrollable bottom
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
	  var h = Math.max(this.itemHeight || 0, 30)
	  if (b - sb < h) {
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
	  if (this.autoHeight) this.setListHeight()
	  this.emit('change')
	  if (this._iscroll) {
	    setImmediate(function () {
	      self._iscroll.refresh()
	    })
	  }
	}
	
	/**
	 * Adjust list height if there's more data
	 *
	 * @api private
	 */
	List.prototype.setListHeight = function () {
	  var m = this.maxMoreCount()
	  if (m === 0) {
	    this.parentNode.style.height = 'auto'
	    return
	  }
	  var res = this.calculateItem()
	  // something wrong
	  if (!res.itemHeight) return
	  var total = this.reactives.length + m
	  var h = this.padding.top + this.padding.bottom + Math.ceil(total/res.itemRowCount)*res.itemHeight
	  this.parentNode.style.height = h + 'px'
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
	 * @param {Number|String} dir 1 or -1
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
	  this.scrollTo(0)
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
	  if (!this.perpage) throw new Error('select expect perpage option')
	  this.scrollTo(0)
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
	  event.unbind(window, 'resize', this._setListHeight)
	  this.events.unbind()
	  this.off()
	}
	
	/**
	 * Make scrollable scrollTo position Y
	 *
	 * @param {Number} y
	 * @api public
	 */
	List.prototype.scrollTo = function (y) {
	  if (this.scrollable === window) {
	    window.scrollTo(0, y)
	  } else {
	    this.scrollable.scrollTop = y
	  }
	}
	
	/**
	 * Calculate item height and item count per row
	 *
	 * @api private
	 */
	List.prototype.calculateItem = function () {
	  var children = this.parentNode.children
	  var res = {}
	  // can not calculate
	  if (children.length < 2)return res
	  var bottom
	  for (var i = 0, l = children.length; i < l; i++) {
	    var b = children[i].getBoundingClientRect().bottom
	    if (bottom && b !== bottom) {
	      this.itemHeight = res.itemHeight = Math.abs(b - bottom)
	      res.itemRowCount = i
	      break
	    }
	    bottom = b
	  }
	  return res
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(13).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate, __webpack_require__(12).clearImmediate))

/***/ },
/* 13 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {
	if (typeof setImmediate !== 'function') {
	  // node is stupid and does some weird stuff with `this.`.
	  setImmediate = function setImmediate(fn) {
	    setTimeout(fn, 0)
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate))

/***/ },
/* 15 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var events = __webpack_require__(17);
	var delegate = __webpack_require__(18);
	
	/**
	 * Expose `Events`.
	 */
	
	module.exports = Events;
	
	/**
	 * Initialize an `Events` with the given
	 * `el` object which events will be bound to,
	 * and the `obj` which will receive method calls.
	 *
	 * @param {Object} el
	 * @param {Object} obj
	 * @api public
	 */
	
	function Events(el, obj) {
	  if (!(this instanceof Events)) return new Events(el, obj);
	  if (!el) throw new Error('element required');
	  if (!obj) throw new Error('object required');
	  this.el = el;
	  this.obj = obj;
	  this._events = {};
	}
	
	/**
	 * Subscription helper.
	 */
	
	Events.prototype.sub = function(event, method, cb){
	  this._events[event] = this._events[event] || {};
	  this._events[event][method] = cb;
	};
	
	/**
	 * Bind to `event` with optional `method` name.
	 * When `method` is undefined it becomes `event`
	 * with the "on" prefix.
	 *
	 * Examples:
	 *
	 *  Direct event handling:
	 *
	 *    events.bind('click') // implies "onclick"
	 *    events.bind('click', 'remove')
	 *    events.bind('click', 'sort', 'asc')
	 *
	 *  Delegated event handling:
	 *
	 *    events.bind('click li > a')
	 *    events.bind('click li > a', 'remove')
	 *    events.bind('click a.sort-ascending', 'sort', 'asc')
	 *    events.bind('click a.sort-descending', 'sort', 'desc')
	 *
	 * @param {String} event
	 * @param {String|function} [method]
	 * @return {Function} callback
	 * @api public
	 */
	
	Events.prototype.bind = function(event, method){
	  var e = parse(event);
	  var el = this.el;
	  var obj = this.obj;
	  var name = e.name;
	  var method = method || 'on' + name;
	  var args = [].slice.call(arguments, 2);
	
	  // callback
	  function cb(){
	    var a = [].slice.call(arguments).concat(args);
	    obj[method].apply(obj, a);
	  }
	
	  // bind
	  if (e.selector) {
	    cb = delegate.bind(el, e.selector, name, cb);
	  } else {
	    events.bind(el, name, cb);
	  }
	
	  // subscription for unbinding
	  this.sub(name, method, cb);
	
	  return cb;
	};
	
	/**
	 * Unbind a single binding, all bindings for `event`,
	 * or all bindings within the manager.
	 *
	 * Examples:
	 *
	 *  Unbind direct handlers:
	 *
	 *     events.unbind('click', 'remove')
	 *     events.unbind('click')
	 *     events.unbind()
	 *
	 * Unbind delegate handlers:
	 *
	 *     events.unbind('click', 'remove')
	 *     events.unbind('click')
	 *     events.unbind()
	 *
	 * @param {String|Function} [event]
	 * @param {String|Function} [method]
	 * @api public
	 */
	
	Events.prototype.unbind = function(event, method){
	  if (0 == arguments.length) return this.unbindAll();
	  if (1 == arguments.length) return this.unbindAllOf(event);
	
	  // no bindings for this event
	  var bindings = this._events[event];
	  if (!bindings) return;
	
	  // no bindings for this method
	  var cb = bindings[method];
	  if (!cb) return;
	
	  events.unbind(this.el, event, cb);
	};
	
	/**
	 * Unbind all events.
	 *
	 * @api private
	 */
	
	Events.prototype.unbindAll = function(){
	  for (var event in this._events) {
	    this.unbindAllOf(event);
	  }
	};
	
	/**
	 * Unbind all events for `event`.
	 *
	 * @param {String} event
	 * @api private
	 */
	
	Events.prototype.unbindAllOf = function(event){
	  var bindings = this._events[event];
	  if (!bindings) return;
	
	  for (var method in bindings) {
	    this.unbind(event, method);
	  }
	};
	
	/**
	 * Parse `event`.
	 *
	 * @param {String} event
	 * @return {Object}
	 * @api private
	 */
	
	function parse(event) {
	  var parts = event.split(/ +/);
	  return {
	    name: parts.shift(),
	    selector: parts.join(' ')
	  }
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
	    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
	    prefix = bind !== 'addEventListener' ? 'on' : '';
	
	/**
	 * Bind `el` event `type` to `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.bind = function(el, type, fn, capture){
	  el[bind](prefix + type, fn, capture || false);
	  return fn;
	};
	
	/**
	 * Unbind `el` event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.unbind = function(el, type, fn, capture){
	  el[unbind](prefix + type, fn, capture || false);
	  return fn;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var closest = __webpack_require__(19)
	  , event = __webpack_require__(17);
	
	/**
	 * Delegate event `type` to `selector`
	 * and invoke `fn(e)`. A callback function
	 * is returned which may be passed to `.unbind()`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.bind = function(el, selector, type, fn, capture){
	  return event.bind(el, type, function(e){
	    var target = e.target || e.srcElement;
	    e.delegateTarget = closest(target, selector, true, el);
	    if (e.delegateTarget) fn.call(el, e);
	  }, capture);
	};
	
	/**
	 * Unbind event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @api public
	 */
	
	exports.unbind = function(el, type, fn, capture){
	  event.unbind(el, type, fn, capture);
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module Dependencies
	 */
	
	var matches = __webpack_require__(20)
	
	/**
	 * Export `closest`
	 */
	
	module.exports = closest
	
	/**
	 * Closest
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @param {Element} scope (optional)
	 */
	
	function closest (el, selector, scope) {
	  scope = scope || document.documentElement;
	
	  // walk up the dom
	  while (el && el !== scope) {
	    if (matches(el, selector)) return el;
	    el = el.parentNode;
	  }
	
	  // check scope for match
	  return matches(el, selector) ? el : null;
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var query = __webpack_require__(21);
	
	/**
	 * Element prototype.
	 */
	
	var proto = Element.prototype;
	
	/**
	 * Vendor function.
	 */
	
	var vendor = proto.matches
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;
	
	/**
	 * Expose `match()`.
	 */
	
	module.exports = match;
	
	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */
	
	function match(el, selector) {
	  if (!el || el.nodeType !== 1) return false;
	  if (vendor) return vendor.call(el, selector);
	  var nodes = query.all(selector, el.parentNode);
	  for (var i = 0; i < nodes.length; ++i) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	function one(selector, el) {
	  return el.querySelector(selector);
	}
	
	exports = module.exports = function(selector, el){
	  el = el || document;
	  return one(selector, el);
	};
	
	exports.all = function(selector, el){
	  el = el || document;
	  return el.querySelectorAll(selector);
	};
	
	exports.engine = function(obj){
	  if (!obj.one) throw new Error('.one callback required');
	  if (!obj.all) throw new Error('.all callback required');
	  one = obj.one;
	  exports.all = obj.all;
	  return exports;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23)


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var detect = __webpack_require__(24)
	var touchAction = detect.touchAction
	var transform = detect.transform
	var has3d = detect.has3d
	var computedStyle = __webpack_require__(30)
	var Emitter = __webpack_require__(31)
	var events = __webpack_require__(16)
	var Tween = __webpack_require__(32)
	var raf = __webpack_require__(36)
	var throttle = __webpack_require__(37)
	var Handlebar = __webpack_require__(38)
	var max = Math.max
	var min = Math.min
	var now = Date.now
	
	var defineProperty = Object.defineProperty
	
	/**
	 * Create custom event
	 *
	 * @param {String} name
	 * @return {Event}
	 * @api private
	 */
	function customEvent(name) {
	  var e
	  try {
	    e = new CustomEvent(name)
	  } catch(error) {
	    try {
	      e = document.createEvent('CustomEvent')
	      e.initCustomEvent(name, false, false, 0)
	    } catch(err) {
	      return
	    }
	  }
	  return e
	}
	
	/**
	 * Init iscroll with el and optional options
	 * options.handlebar show handlebar if is true
	 *
	 * @param  {Element}  el
	 * @param {Object} opts
	 * @api public
	 */
	function Iscroll(el, opts) {
	  if (! (this instanceof Iscroll)) return new Iscroll(el, opts)
	  this.y = 0
	  this.scrollable = el
	  el.style.overflow = 'hidden'
	  var children = el.children
	  if (children.length !== 1) {
	    throw new Error('iscroll need single element child of scrollable to work')
	  }
	  this.el = children[0]
	  this.touchAction('none')
	  this.refresh()
	  this.bind()
	  var self = this
	  if (defineProperty) {
	    defineProperty(this.scrollable, 'scrollTop', {
	      set: function (v) {
	        return self.scrollTo(-v, 200)
	      },
	      get: function () {
	        return - self.y
	      }
	    })
	  }
	  this.on('scroll', function () {
	    var e = customEvent('scroll')
	    if (e) el.dispatchEvent(e)
	  })
	  opts = opts || {}
	  if (opts.handlebar) {
	    this.handlebar = new Handlebar(el)
	  }
	  this._refresh = this.refresh.bind(this)
	  window.addEventListener('orientationchange', this._refresh, false)
	  window.addEventListener('resize', this._refresh, false)
	}
	
	Emitter(Iscroll.prototype)
	
	/**
	 * Bind events
	 *
	 * @api private
	 */
	Iscroll.prototype.bind = function () {
	  this.events = events(this.el, this)
	  this.docEvents = events(document, this)
	
	   // W3C touch events
	  this.events.bind('touchstart')
	  this.events.bind('touchmove')
	  this.docEvents.bind('touchend')
	  this.docEvents.bind('touchcancel', 'ontouchend')
	}
	
	/**
	 * Recalculate the height
	 *
	 * @api public
	 */
	Iscroll.prototype.refresh = function () {
	  this.viewHeight = this.scrollable.getBoundingClientRect().height
	  this.height = this.el.getBoundingClientRect().height
	}
	
	/**
	 * Unbind all event listeners, and remove handlebar if necessary
	 *
	 * @api public
	 */
	Iscroll.prototype.unbind = function () {
	  this.off()
	  this.events.unbind()
	  this.docEvents.unbind()
	  window.removeEventListener('orientationchange', this._refresh, false)
	  window.removeEventListener('resize', this._refresh, false)
	  if (this.handlebar) this.scrollable.removeChild(this.handlebar.el)
	}
	
	Iscroll.prototype.restrict = function (y) {
	  y = min(y , 80)
	  var h = Math.max(this.height, this.viewHeight)
	  y = max(y , this.viewHeight - h - 80)
	  return y
	}
	
	/**
	 * touchstart event handler
	 *
	 * @param  {Event}  e
	 * @api private
	 */
	Iscroll.prototype.ontouchstart = function (e) {
	  this.speed = null
	  this.leftright = null
	  if (this.tween) this.tween.stop()
	  this.dy = 0
	  this.ts = now()
	  if (this.handlebar) this.resizeHandlebar()
	
	  var touch = this.getTouch(e)
	  this.clientY = touch.clientY
	  this.down = {
	    x: touch.clientX,
	    y: touch.clientY,
	    start: this.y,
	    at: now()
	  }
	}
	
	/**
	 * touchmove event handler
	 *
	 * @param  {Event}  e
	 * @api private
	 */
	Iscroll.prototype.ontouchmove = function (e) {
	  e.preventDefault()
	  // do nothing if left right move
	  if (e.touches.length > 1 || !this.down || this.leftright) return
	  var touch = this.getTouch(e)
	  var down = this.down
	  var dy = this.dy = touch.clientY - down.y
	  var dx = touch.clientX - down.x
	  // can not determine
	  if (dx === 0 && dy === 0) return
	  // determine dy and the slope
	  if (null == this.leftright) {
	    // no move if contentHeight < viewHeight and move up
	    if (this.height <= this.viewHeight && dy < 0) return
	    var slope = dx / dy
	    // if is greater than 1 or -1, we're swiping up/down
	    if (slope > 1 || slope < -1) {
	      this.leftright = true
	      if (this.handlebar) this.hideHandlebar()
	      return
	    } else {
	      this.leftright = false
	    }
	  }
	
	  //calculate speed every 100 milisecond
	  this.calcuteSpeed(touch.clientY)
	  var start = this.down.start
	  var dest = this.restrict(start + dy)
	  this.translate(dest)
	}
	
	/**
	 * Calcute speed by clientY
	 *
	 * @param {Number} y
	 * @api priavte
	 */
	Iscroll.prototype.calcuteSpeed = function (y) {
	  var ts = now()
	  var dt = ts - this.ts
	  if (ts - this.down.at < 100) {
	    this.distance = y - this.clientY
	    this.speed = Math.abs(this.distance/dt)
	  } else if(dt > 100){
	    this.distance = y - this.clientY
	    this.speed = Math.abs(this.distance/dt)
	    this.ts = ts
	    this.clientY = y
	  }
	}
	
	/**
	 * Event handler for touchend
	 *
	 * @param  {Event}  e
	 * @api private
	 */
	Iscroll.prototype.ontouchend = function (e) {
	  if (!this.down || this.leftright) return
	  if (this.height <= this.viewHeight && this.dy < 0) {
	    if(this.handlebar) this.handlebar.hide()
	    return
	  }
	  var touch = this.getTouch(e)
	  this.calcuteSpeed(touch.clientY)
	  var m = this.momentum()
	  this.scrollTo(m.dest, m.duration, m.ease)
	  this.emit('release', this.y)
	  this.down = null
	}
	
	/**
	 * Calculate the animate props for moveon
	 *
	 * @return {Object}
	 * @api private
	 */
	Iscroll.prototype.momentum = function () {
	  var deceleration = 0.0004
	  var speed = this.speed
	  speed = min(speed, 0.8)
	  var destination = this.y + ( speed * speed ) / ( 2 * deceleration ) * ( this.distance < 0 ? -1 : 1 )
	  var duration = speed / deceleration
	  var newY, ease
	  if (destination > 0) {
	    newY = 0
	    ease = 'out-back'
	  } else if (destination < this.viewHeight - this.height) {
	    newY = this.viewHeight - this.height
	    ease = 'out-back'
	  }
	  if (typeof newY === 'number') {
	    duration = duration*(newY - this.y + 160)/(destination - this.y)
	    destination = newY
	  }
	  if (this.y > 0 || this.y < this.viewHeight - this.height) {
	    duration = 500
	    ease = 'out-circ'
	  }
	  return {
	    dest: destination,
	    duration: duration,
	    ease: ease
	  }
	}
	
	
	/**
	 * Scroll to potions y with optional duration and ease function
	 *
	 * @param {Number} y
	 * @param {Number} duration
	 * @param {String} easing
	 * @api public
	 */
	Iscroll.prototype.scrollTo = function (y, duration, easing) {
	  if (this.tween) this.tween.stop()
	  var intransition = (duration > 0 && y !== this.y)
	  if (!intransition) {
	    this.onScrollEnd()
	    return this.translate(y)
	  }
	
	  easing = easing || 'out-cube'
	  var tween = this.tween = Tween({y : this.y})
	      .ease(easing)
	      .to({y: y})
	      .duration(duration)
	
	  var self = this
	  tween.update(function(o) {
	    self.translate(o.y)
	  })
	
	  tween.on('end', function () {
	    animate = function(){} // eslint-disable-line
	    if (!tween.stopped) {
	      self.onScrollEnd()
	    }
	  })
	
	  function animate() {
	    raf(animate)
	    tween.update()
	  }
	
	  animate()
	}
	
	/**
	 * Scrollend
	 *
	 * @api private
	 */
	Iscroll.prototype.onScrollEnd = function () {
	  this.hideHandlebar()
	  var top = this.y === 0
	  var bottom = this.y === (this.viewHeight - this.height)
	  this.emit('scrollend', {
	    top: top,
	    bottom: bottom
	  })
	}
	
	/**
	 * Gets the appropriate "touch" object for the `e` event. The event may be from
	 * a "mouse", "touch", or "Pointer" event, so the normalization happens here.
	 *
	 * @api private
	 */
	
	Iscroll.prototype.getTouch = function(e){
	  // "mouse" and "Pointer" events just use the event object itself
	  var touch = e
	  if (e.changedTouches && e.changedTouches.length > 0) {
	    // W3C "touch" events use the `changedTouches` array
	    touch = e.changedTouches[0]
	  }
	  return touch
	}
	
	
	/**
	 * Translate to `x`.
	 *
	 *
	 * @api private
	 */
	
	Iscroll.prototype.translate = function(y) {
	  var s = this.el.style
	  if (isNaN(y)) return
	  y = Math.floor(y)
	  //reach the end
	  if (this.y !== y) {
	    this.y = y
	    this.emit('scroll', - y)
	    if (this.handlebar) this.transformHandlebar()
	  }
	  if (has3d) {
	    s[transform] = 'translate3d(0, ' + y + 'px' + ', 0)'
	  } else {
	    s[transform] = 'translateY(' + y + 'px)'
	  }
	}
	
	/**
	 * Sets the "touchAction" CSS style property to `value`.
	 *
	 * @api private
	 */
	
	Iscroll.prototype.touchAction = function(value){
	  var s = this.el.style
	  if (touchAction) {
	    s[touchAction] = value
	  }
	}
	
	/**
	 * Transform handlebar
	 *
	 * @api private
	 */
	Iscroll.prototype.transformHandlebar = throttle(function(){
	  var vh = this.viewHeight
	  var h = this.height
	  var bh = vh - vh * vh/h
	  var ih = h - vh
	  var y = parseInt(- bh * this.y/ih)
	  this.handlebar.translateY(y)
	}, 100)
	
	/**
	 * show the handlebar and size it
	 * @api public
	 */
	Iscroll.prototype.resizeHandlebar = function(){
	  var h = this.viewHeight * this.viewHeight/this.height
	  this.handlebar.resize(h)
	}
	
	/**
	 * Hide handlebar
	 *
	 * @api private
	 */
	Iscroll.prototype.hideHandlebar = function () {
	  if (this.handlebar) this.handlebar.hide()
	}
	
	module.exports = Iscroll


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports.transition = __webpack_require__(25)
	
	exports.transform = __webpack_require__(26)
	
	exports.touchAction = __webpack_require__(27)
	
	exports.transitionend = __webpack_require__(28)
	
	exports.has3d = __webpack_require__(29)


/***/ },
/* 25 */
/***/ function(module, exports) {

	var styles = [
	  'transition',
	  'webkitTransition',
	  'MozTransition',
	  'OTransition',
	  'msTransition'
	]
	
	var el = document.createElement('p')
	var style
	
	for (var i = 0; i < styles.length; i++) {
	  if (null != el.style[styles[i]]) {
	    style = styles[i]
	    break
	  }
	}
	el = null
	
	module.exports = style


/***/ },
/* 26 */
/***/ function(module, exports) {

	
	var styles = [
	  'webkitTransform',
	  'MozTransform',
	  'msTransform',
	  'OTransform',
	  'transform'
	];
	
	var el = document.createElement('p');
	var style;
	
	for (var i = 0; i < styles.length; i++) {
	  style = styles[i];
	  if (null != el.style[style]) {
	    module.exports = style;
	    break;
	  }
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = touchActionProperty();
	
	/**
	 * Returns "touchAction", "msTouchAction", or null.
	 */
	
	function touchActionProperty(doc) {
	  if (!doc) doc = document;
	  var div = doc.createElement('div');
	  var prop = null;
	  if ('touchAction' in div.style) prop = 'touchAction';
	  else if ('msTouchAction' in div.style) prop = 'msTouchAction';
	  div = null;
	  return prop;
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Transition-end mapping
	 */
	
	var map = {
	  'WebkitTransition' : 'webkitTransitionEnd',
	  'MozTransition' : 'transitionend',
	  'OTransition' : 'oTransitionEnd',
	  'msTransition' : 'MSTransitionEnd',
	  'transition' : 'transitionend'
	};
	
	/**
	 * Expose `transitionend`
	 */
	
	var el = document.createElement('p');
	
	for (var transition in map) {
	  if (null != el.style[transition]) {
	    module.exports = map[transition];
	    break;
	  }
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	var prop = __webpack_require__(26);
	
	// IE <=8 doesn't have `getComputedStyle`
	if (!prop || !window.getComputedStyle) {
	  module.exports = false;
	
	} else {
	  var map = {
	    webkitTransform: '-webkit-transform',
	    OTransform: '-o-transform',
	    msTransform: '-ms-transform',
	    MozTransform: '-moz-transform',
	    transform: 'transform'
	  };
	
	  // from: https://gist.github.com/lorenzopolidori/3794226
	  var el = document.createElement('div');
	  el.style[prop] = 'translate3d(1px,1px,1px)';
	  document.body.insertBefore(el, null);
	  var val = getComputedStyle(el).getPropertyValue(map[prop]);
	  document.body.removeChild(el);
	  module.exports = null != val && val.length && 'none' != val;
	}


/***/ },
/* 30 */
/***/ function(module, exports) {

	// DEV: We don't use var but favor parameters since these play nicer with minification
	function computedStyle(el, prop, getComputedStyle, style) {
	  getComputedStyle = window.getComputedStyle;
	  style =
	      // If we have getComputedStyle
	      getComputedStyle ?
	        // Query it
	        // TODO: From CSS-Query notes, we might need (node, null) for FF
	        getComputedStyle(el) :
	
	      // Otherwise, we are in IE and use currentStyle
	        el.currentStyle;
	  if (style) {
	    return style
	    [
	      // Switch to camelCase for CSSOM
	      // DEV: Grabbed from jQuery
	      // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	      // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	      prop.replace(/-(\w)/gi, function (word, letter) {
	        return letter.toUpperCase();
	      })
	    ];
	  }
	}
	
	module.exports = computedStyle;


/***/ },
/* 31 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(31);
	var clone = __webpack_require__(33);
	var type = __webpack_require__(34);
	var ease = __webpack_require__(35);
	
	/**
	 * Expose `Tween`.
	 */
	
	module.exports = Tween;
	
	/**
	 * Initialize a new `Tween` with `obj`.
	 *
	 * @param {Object|Array} obj
	 * @api public
	 */
	
	function Tween(obj) {
	  if (!(this instanceof Tween)) return new Tween(obj);
	  this._from = obj;
	  this.ease('linear');
	  this.duration(500);
	}
	
	/**
	 * Mixin emitter.
	 */
	
	Emitter(Tween.prototype);
	
	/**
	 * Reset the tween.
	 *
	 * @api public
	 */
	
	Tween.prototype.reset = function(){
	  this.isArray = 'array' === type(this._from);
	  this._curr = clone(this._from);
	  this._done = false;
	  this._start = Date.now();
	  return this;
	};
	
	/**
	 * Tween to `obj` and reset internal state.
	 *
	 *    tween.to({ x: 50, y: 100 })
	 *
	 * @param {Object|Array} obj
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.to = function(obj){
	  this.reset();
	  this._to = obj;
	  return this;
	};
	
	/**
	 * Set duration to `ms` [500].
	 *
	 * @param {Number} ms
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.duration = function(ms){
	  this._duration = ms;
	  return this;
	};
	
	/**
	 * Set easing function to `fn`.
	 *
	 *    tween.ease('in-out-sine')
	 *
	 * @param {String|Function} fn
	 * @return {Tween}
	 * @api public
	 */
	
	Tween.prototype.ease = function(fn){
	  fn = 'function' == typeof fn ? fn : ease[fn];
	  if (!fn) throw new TypeError('invalid easing function');
	  this._ease = fn;
	  return this;
	};
	
	/**
	 * Stop the tween and immediately emit "stop" and "end".
	 *
	 * @return {Tween}
	 * @api public
	 */
	
	Tween.prototype.stop = function(){
	  this.stopped = true;
	  this._done = true;
	  this.emit('stop');
	  this.emit('end');
	  return this;
	};
	
	/**
	 * Perform a step.
	 *
	 * @return {Tween} self
	 * @api private
	 */
	
	Tween.prototype.step = function(){
	  if (this._done) return;
	
	  // duration
	  var duration = this._duration;
	  var now = Date.now();
	  var delta = now - this._start;
	  var done = delta >= duration;
	
	  // complete
	  if (done) {
	    this._from = this._to;
	    this._update(this._to);
	    this._done = true;
	    this.emit('end');
	    return this;
	  }
	
	  // tween
	  var from = this._from;
	  var to = this._to;
	  var curr = this._curr;
	  var fn = this._ease;
	  var p = (now - this._start) / duration;
	  var n = fn(p);
	
	  // array
	  if (this.isArray) {
	    for (var i = 0; i < from.length; ++i) {
	      curr[i] = from[i] + (to[i] - from[i]) * n;
	    }
	
	    this._update(curr);
	    return this;
	  }
	
	  // objech
	  for (var k in from) {
	    curr[k] = from[k] + (to[k] - from[k]) * n;
	  }
	
	  this._update(curr);
	  return this;
	};
	
	/**
	 * Set update function to `fn` or
	 * when no argument is given this performs
	 * a "step".
	 *
	 * @param {Function} fn
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.update = function(fn){
	  if (0 == arguments.length) return this.step();
	  this._update = fn;
	  return this;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var type;
	try {
	  type = __webpack_require__(34);
	} catch (_) {
	  type = __webpack_require__(34);
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = clone;
	
	/**
	 * Clones objects.
	 *
	 * @param {Mixed} any object
	 * @api public
	 */
	
	function clone(obj){
	  switch (type(obj)) {
	    case 'object':
	      var copy = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          copy[key] = clone(obj[key]);
	        }
	      }
	      return copy;
	
	    case 'array':
	      var copy = new Array(obj.length);
	      for (var i = 0, l = obj.length; i < l; i++) {
	        copy[i] = clone(obj[i]);
	      }
	      return copy;
	
	    case 'regexp':
	      // from millermedeiros/amd-utils - MIT
	      var flags = '';
	      flags += obj.multiline ? 'm' : '';
	      flags += obj.global ? 'g' : '';
	      flags += obj.ignoreCase ? 'i' : '';
	      return new RegExp(obj.source, flags);
	
	    case 'date':
	      return new Date(obj.getTime());
	
	    default: // string, number, boolean, …
	      return obj;
	  }
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * toString ref.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
	
	module.exports = function(val){
	  switch (toString.call(val)) {
	    case '[object Date]': return 'date';
	    case '[object RegExp]': return 'regexp';
	    case '[object Arguments]': return 'arguments';
	    case '[object Array]': return 'array';
	    case '[object Error]': return 'error';
	  }
	
	  if (val === null) return 'null';
	  if (val === undefined) return 'undefined';
	  if (val !== val) return 'nan';
	  if (val && val.nodeType === 1) return 'element';
	
	  val = val.valueOf
	    ? val.valueOf()
	    : Object.prototype.valueOf.apply(val)
	
	  return typeof val;
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	
	// easing functions from "Tween.js"
	
	exports.linear = function(n){
	  return n;
	};
	
	exports.inQuad = function(n){
	  return n * n;
	};
	
	exports.outQuad = function(n){
	  return n * (2 - n);
	};
	
	exports.inOutQuad = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n;
	  return - 0.5 * (--n * (n - 2) - 1);
	};
	
	exports.inCube = function(n){
	  return n * n * n;
	};
	
	exports.outCube = function(n){
	  return --n * n * n + 1;
	};
	
	exports.inOutCube = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n;
	  return 0.5 * ((n -= 2 ) * n * n + 2);
	};
	
	exports.inQuart = function(n){
	  return n * n * n * n;
	};
	
	exports.outQuart = function(n){
	  return 1 - (--n * n * n * n);
	};
	
	exports.inOutQuart = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n;
	  return -0.5 * ((n -= 2) * n * n * n - 2);
	};
	
	exports.inQuint = function(n){
	  return n * n * n * n * n;
	}
	
	exports.outQuint = function(n){
	  return --n * n * n * n * n + 1;
	}
	
	exports.inOutQuint = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n * n;
	  return 0.5 * ((n -= 2) * n * n * n * n + 2);
	};
	
	exports.inSine = function(n){
	  return 1 - Math.cos(n * Math.PI / 2 );
	};
	
	exports.outSine = function(n){
	  return Math.sin(n * Math.PI / 2);
	};
	
	exports.inOutSine = function(n){
	  return .5 * (1 - Math.cos(Math.PI * n));
	};
	
	exports.inExpo = function(n){
	  return 0 == n ? 0 : Math.pow(1024, n - 1);
	};
	
	exports.outExpo = function(n){
	  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
	};
	
	exports.inOutExpo = function(n){
	  if (0 == n) return 0;
	  if (1 == n) return 1;
	  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
	  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
	};
	
	exports.inCirc = function(n){
	  return 1 - Math.sqrt(1 - n * n);
	};
	
	exports.outCirc = function(n){
	  return Math.sqrt(1 - (--n * n));
	};
	
	exports.inOutCirc = function(n){
	  n *= 2
	  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
	  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
	};
	
	exports.inBack = function(n){
	  var s = 1.70158;
	  return n * n * (( s + 1 ) * n - s);
	};
	
	exports.outBack = function(n){
	  var s = 1.70158;
	  return --n * n * ((s + 1) * n + s) + 1;
	};
	
	exports.inOutBack = function(n){
	  var s = 1.70158 * 1.525;
	  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
	  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
	};
	
	exports.inBounce = function(n){
	  return 1 - exports.outBounce(1 - n);
	};
	
	exports.outBounce = function(n){
	  if ( n < ( 1 / 2.75 ) ) {
	    return 7.5625 * n * n;
	  } else if ( n < ( 2 / 2.75 ) ) {
	    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
	  } else if ( n < ( 2.5 / 2.75 ) ) {
	    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
	  } else {
	    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
	  }
	};
	
	exports.inOutBounce = function(n){
	  if (n < .5) return exports.inBounce(n * 2) * .5;
	  return exports.outBounce(n * 2 - 1) * .5 + .5;
	};
	
	// aliases
	
	exports['in-quad'] = exports.inQuad;
	exports['out-quad'] = exports.outQuad;
	exports['in-out-quad'] = exports.inOutQuad;
	exports['in-cube'] = exports.inCube;
	exports['out-cube'] = exports.outCube;
	exports['in-out-cube'] = exports.inOutCube;
	exports['in-quart'] = exports.inQuart;
	exports['out-quart'] = exports.outQuart;
	exports['in-out-quart'] = exports.inOutQuart;
	exports['in-quint'] = exports.inQuint;
	exports['out-quint'] = exports.outQuint;
	exports['in-out-quint'] = exports.inOutQuint;
	exports['in-sine'] = exports.inSine;
	exports['out-sine'] = exports.outSine;
	exports['in-out-sine'] = exports.inOutSine;
	exports['in-expo'] = exports.inExpo;
	exports['out-expo'] = exports.outExpo;
	exports['in-out-expo'] = exports.inOutExpo;
	exports['in-circ'] = exports.inCirc;
	exports['out-circ'] = exports.outCirc;
	exports['in-out-circ'] = exports.inOutCirc;
	exports['in-back'] = exports.inBack;
	exports['out-back'] = exports.outBack;
	exports['in-out-back'] = exports.inOutBack;
	exports['in-bounce'] = exports.inBounce;
	exports['out-bounce'] = exports.outBounce;
	exports['in-out-bounce'] = exports.inOutBounce;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Expose `requestAnimationFrame()`.
	 */
	
	exports = module.exports = window.requestAnimationFrame
	  || window.webkitRequestAnimationFrame
	  || window.mozRequestAnimationFrame
	  || fallback;
	
	/**
	 * Fallback implementation.
	 */
	
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime();
	  var ms = Math.max(0, 16 - (curr - prev));
	  var req = setTimeout(fn, ms);
	  prev = curr;
	  return req;
	}
	
	/**
	 * Cancel.
	 */
	
	var cancel = window.cancelAnimationFrame
	  || window.webkitCancelAnimationFrame
	  || window.mozCancelAnimationFrame
	  || window.clearTimeout;
	
	exports.cancel = function(id){
	  cancel.call(window, id);
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = throttle;
	
	/**
	 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
	 *
	 * @param {Function} func Function to wrap.
	 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
	 * @return {Function} A new function that wraps the `func` function passed in.
	 */
	
	function throttle (func, wait) {
	  var ctx, args, rtn, timeoutID; // caching
	  var last = 0;
	
	  return function throttled () {
	    ctx = this;
	    args = arguments;
	    var delta = new Date() - last;
	    if (!timeoutID)
	      if (delta >= wait) call();
	      else timeoutID = setTimeout(call, wait - delta);
	    return rtn;
	  };
	
	  function call () {
	    timeoutID = 0;
	    last = +new Date();
	    rtn = func.apply(ctx, args);
	    ctx = null;
	    args = null;
	  }
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var detect = __webpack_require__(24)
	var has3d = detect.has3d
	var transform = detect.transform
	
	/**
	 * Handlebar contructor
	 *
	 * @param {Element} scrollable
	 * @contructor
	 * @api public
	 */
	function handlebar(scrollable) {
	  var el = this.el = document.createElement('div')
	  el.className = 'iscroll-handlebar'
	  scrollable.appendChild(el)
	}
	
	/**
	 * Show the handlebar and resize it
	 *
	 * @param {Number} h
	 * @api public
	 */
	handlebar.prototype.resize = function (h) {
	  var s = this.el.style
	  s.height = h + 'px'
	  s.backgroundColor = 'rgba(0,0,0,0.3)'
	}
	
	/**
	 * Hide this handlebar
	 *
	 * @api public
	 */
	handlebar.prototype.hide = function () {
	  this.el.style.backgroundColor = 'transparent'
	}
	
	/**
	 * Move handlebar by translateY
	 *
	 * @param {Number} y
	 * @api public
	 */
	handlebar.prototype.translateY= function(y){
	  var s = this.el.style
	  if (has3d) {
	    s[transform] = 'translate3d(0, ' + y + 'px' + ', 0)'
	  } else {
	    s[transform] = 'translateY(' + y + 'px)'
	  }
	}
	
	module.exports = handlebar


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Model = __webpack_require__(40)
	var Reactive = __webpack_require__(43)
	var domify = __webpack_require__(47)
	var uid = __webpack_require__(51)
	var body = document.body
	
	/**
	 * Cteate ListRender
	 *
	 * `el` repeat element or (template string) for rendering
	 * `parentNode` element for list element to append to
	 * `option` optional config obj
	 * `option.delegate` delegate object for [reactive]
	 * `option.bindings` bindings object for [reactive]
	 * `option.filters` filters object for [reactive]
	 * `option.model` model class used for generate model
	 * `option.limit` the limit number for render when `setData()` (default Infinity)
	 * `option.perpage` the limit number for paging, should >= limit
	 * `option.empty` String or Element rendered in parentNode when internal data list is empty
	 *
	 * @param  {Element}  el
	 * @param {Element} parentNode
	 * @param {Object} option
	 * @api public
	 */
	function ListRender(el, parentNode, option) {
	  if (!(this instanceof ListRender)) return new ListRender(el, parentNode, option)
	  if (typeof el === 'string') el = domify(el)
	  option = option || {}
	  var empty = option.empty
	  if (empty) {
	    this.emptyEl = typeof empty === 'string' ? domify(empty) : empty
	    delete option.empty
	  }
	  this.curpage = 0
	  this.curr = 0
	  this.parentNode = parentNode
	  this.el = el
	  this.reactives = []
	  this.data = []
	  assign(this, option)
	  this.limit = this.limit || Infinity
	}
	
	/**
	 * Set internal data array, and render them limit by `option.limit`
	 *
	 * @param {Array} array
	 * @api public
	 */
	ListRender.prototype.setData = function (array) {
	  this.data = array.slice()
	  this.renderRange(0, this.limit)
	}
	
	/**
	  Render more internal data, return `false` if no data to render
	 *
	 * @param {Number} max
	 * @return {Boolean}
	 * @api public
	 */
	ListRender.prototype.more = function (max) {
	  if (this.limit === Infinity) return false
	  var d = this.maxMoreCount()
	  if (d === 0) return false //no more items could render
	  var list = this.filtered || this.data
	  var from = this.curr
	  var to = from + Math.min(max, d)
	  var arr = list.slice(from ,to)
	  var fragment = this.createFragment(arr)
	  this.parentNode.appendChild(fragment)
	  this.curr = to
	  this.onchange()
	  return true
	}
	
	/**
	 * The max count of items can be rendered by more
	 *
	 * @return {number}
	 * @api public
	 */
	ListRender.prototype.maxMoreCount = function () {
	  // filter
	  var list = this.filtered || this.data
	  var l = list.length
	  var perpage = this.perpage
	  // no more data
	  if (this.curr >= l) return 0
	  var still = l - this.curr
	  // paging
	  if (perpage) {
	    var c = this.reactives.length
	    // page is full
	    if (c >= perpage) return 0
	    return Math.min(perpage - c, still)
	  }
	  return still
	}
	/**
	 * Append more data and render them, no refresh
	 *
	 * @param {Array} array
	 * @api public
	 */
	ListRender.prototype.appendData = function (array) {
	  this.data = this.data.concat(array)
	  var fragment = this.createFragment(array)
	  this.parentNode.appendChild(fragment)
	  this.curr = this.curr + array.length
	  this.onchange()
	}
	/**
	 * Prepend more data and render them, no refresh
	 *
	 * @param {Array} array
	 * @api public
	 */
	ListRender.prototype.prependData = function (array) {
	  this.data = array.concat(this.data)
	  var fragment = this.createFragment(array)
	  prepend(this.parentNode, fragment)
	  this.curr = this.curr + array.length
	  this.onchange()
	}
	
	/**
	 * Empty the exist list, and render the specific range of
	 * internal data array (end not included, no option.limit restrict)
	 *
	 * @param {Number} start
	 * @param {Number}  [end]
	 * @api public
	 */
	ListRender.prototype.renderRange = function (start, end) {
	  this.clean()
	  var list = this.filtered || this.data
	  this.curr= end = Math.min(list.length, end)
	  var arr = list.slice(start, end)
	  if (arr.length === 0) {
	    this.empty(true)
	    this.onchange()
	    return
	  }
	  this.empty(false)
	  var fragment = this.createFragment(arr)
	  this.parentNode.appendChild(fragment)
	  this.onchange()
	}
	/**
	 * Filter the internal data with `field` and `val` (or function used for array.filter), and render them limit by `option.limit`
	 * When val or field is falsy, render all with limit by `option.limit`
	 *
	 * @param {String} field
	 * @param {String|Function} val
	 * @return {Number}
	 * @api public
	 */
	ListRender.prototype.filterData = function (field, val) {
	  var fn
	  if (typeof field === 'function') {
	    fn = field
	  } else if (typeof val ==='function') {
	    fn = val
	  } else if (!field || val === '' || typeof val === 'undefined') {
	    fn = function () {return true}
	  } else if (typeof val === 'string') {
	    val = val.replace('\\','\\\\').replace(/\s+/,'').split(/\s*/g).join('.*')
	    var re = new RegExp(val, 'i')
	    fn = function (o) {
	      return re.test(String(o[field]))
	    }
	  } else {
	    fn = function (o) {
	      return String(o[field]) == String(val)
	    }
	  }
	  var arr = this.filtered = this.data.filter(fn)
	  var l = arr.length
	  if (l === this.data.length) this.filtered = null
	  if (this.perpage) {
	    this.select(0)
	  } else {
	    this.renderRange(0, this.limit)
	  }
	  return l
	}
	
	/**
	 * Sort the data with `field` `direction` ( 1 or -1 for ascend and descend)
	 * and optional method (`string` or `number`, or a sort function for javascript array),
	 * render them limit by `option.limit`
	 *
	 * @param {String} field
	 * @param {Number} dir
	 * @param {String|Function} method
	 * @return {undefined}
	 * @api public
	 */
	ListRender.prototype.sortData = function (field, dir, method) {
	  var data = this.filtered || this.data
	  dir = parseInt(dir, 10)
	  if (!dir) throw new Error('direction should only be 1 or -1')
	  data.sort(function (obj, other) {
	    if (typeof method === 'function') {
	      return method(obj, other) * dir
	    }
	    var a = obj[field]
	    var b = other[field]
	    switch (method) {
	      case 'number':
	        a = Number(a)
	        b = Number(b)
	        break
	      case 'string':
	        a = a.trim()
	        b = b.trim()
	        break
	    }
	    return (a < b ? 1 : -1) * dir
	  })
	  if (this.perpage) {
	    this.select(this.curpage)
	  } else {
	    this.renderRange(0, this.limit)
	  }
	}
	
	/**
	 * Find a specific model instance related by element, useful for event delegate
	 *
	 * @param  {Element}  el
	 * @return {reactive}
	 * @api public
	 */
	ListRender.prototype.findModel = function (el) {
	  do {
	    if (el.parentNode === this.parentNode) break
	    if (el === body) return null
	    el = el.parentNode
	  } while (el.parentNode);
	  for (var i = this.reactives.length - 1; i >= 0; i--) {
	    var r = this.reactives[i];
	    if (r.el === el) return r.model;
	  }
	  return null
	}
	
	ListRender.prototype.remove = function () {
	  if (this._removed) return
	  this._removed = true
	  this.clean()
	  delete this.reactives
	  delete this.data
	  delete this.filtered
	}
	
	/**
	 * Show or hide the empty element
	 *
	 * @param {Boolean} show
	 * @api private
	 */
	ListRender.prototype.empty = function (show) {
	  var el = this.emptyEl
	  if (!el) return
	  if (show) {
	    this.parentNode.appendChild(el)
	  } else if (el.parentNode) {
	    this.parentNode.removeChild(el)
	  }
	}
	
	/**
	 * Clean all list items
	 *
	 * @api private
	 */
	ListRender.prototype.clean = function () {
	  // reactive remove would trigger array splice
	  this.reactives.slice().forEach(function (reactive) {
	    reactive.remove()
	  })
	}
	
	/**
	 * Create reactive config and model class by plain obj
	 *
	 * @param  {Object} obj
	 * @return {undefined}
	 * @api public
	 */
	ListRender.prototype.createReactiveConfig = function (obj) {
	  var model
	  if (this.model) {
	    model = this.model(obj)
	  } else {
	    var clz = this.model = createModelClass(Object.keys(obj))
	    model = clz(obj)
	  }
	  this.primaryKey = obj.hasOwnProperty('id') ? 'id' :
	                    obj.hasOwnProperty('_id') ? '_id': null
	  var opt = {
	    delegate: this.delegate,
	    bindings: this.bindings,
	    filters: this.filters
	  }
	  return Reactive.generateConfig(this.el, model, opt)
	}
	
	/**
	 * Append remove to model
	 *
	 * @param {Object} model
	 * @api private
	 */
	ListRender.prototype.appendRemove = function (model, reactive) {
	  var orig = model.remove
	  var id = reactive.id
	  var self = this
	  var fn = function (res) {
	    if (res === false) return
	    self.removeDataById(id)
	    self.curr = Math.max(0, self.curr - 1)
	    reactive.remove()
	    self.onchange(true)
	    self.more(1)
	  }
	  if (orig && typeof orig !== 'function') throw new TypeError('remove is not a function on model')
	  if (!orig) {
	    model.remove = fn
	  } else {
	    model.remove = function () {
	      var res = orig.apply(this, arguments)
	      if (res && typeof res.then === 'function') {
	        res.then(fn, function () {})
	      } else {
	        fn()
	      }
	    }
	  }
	}
	
	/**
	 * Create reactive instance from object
	 *
	 * @param  {Object}  obj
	 * @return {Reactive}
	 * @api private
	 */
	ListRender.prototype.createReactive = function (obj) {
	  var el = this.el.cloneNode(true)
	  var model = this.model(obj)
	  var id
	  if (this.primaryKey == null) {
	    this.primaryKey = '_id'
	    id = obj[this.primaryKey] = uid(10)
	  } else {
	    id = obj[this.primaryKey]
	  }
	  var opt = {
	    delegate: this.delegate,
	    bindings: this.bindings,
	    filters: this.filters,
	    config: this.config
	  }
	  var reactive = Reactive(el, model, opt)
	  reactive.id = id
	  this.appendRemove(model, reactive)
	  var list = this.reactives
	  list.push(reactive)
	  // remove from list
	  reactive.on('remove', function () {
	    var i = list.indexOf(reactive)
	    list.splice(i, 1)
	  })
	  return reactive
	}
	
	/**
	 * Remove data inside internal list by id
	 *
	 * @param {String|Number} id
	 * @return {undefined}
	 * @api private
	 */
	ListRender.prototype.removeDataById = function (id) {
	  var pk = this.primaryKey
	  removeItem(this.data, pk, id)
	  if (this.filtered) {
	    removeItem(this.filtered, pk, id)
	  }
	}
	
	function removeItem(arr, key, val) {
	  for (var i = arr.length - 1; i >= 0; i--) {
	    var v = arr[i]
	    if (v && v[key] === val) {
	      arr.splice(i, 1)
	      return
	    }
	  }
	}
	/**
	 * Get fragment from array of object
	 *
	 * @param  {Array}  arr
	 * @api private
	 */
	ListRender.prototype.createFragment = function (arr) {
	  var obj = arr[0]
	  if (typeof this.config === 'undefined' && obj) this.config = this.createReactiveConfig(obj)
	  var fragment = document.createDocumentFragment()
	  arr.forEach(function (obj) {
	    var reactive = this.createReactive(obj)
	    fragment.appendChild(reactive.el)
	  }, this)
	  return fragment
	}
	
	/**
	 * Select page by page number,
	 * rerender even if page number not change, eg: filter
	 *
	 * @param  {Number}  n
	 * @api public
	 */
	ListRender.prototype.select = function (n) {
	  if (!this.perpage) throw new Error('perpage required in option')
	  var s = n*this.perpage
	  var e = (n + 1)*this.perpage
	  e = Math.min(e, s + this.limit)
	  this.curpage = n
	  this.renderRange(s, e)
	}
	
	/**
	 * Show previous page
	 *
	 * @api public
	 */
	ListRender.prototype.prev = function () {
	  this.select(Math.max(0, this.curpage - 1))
	}
	
	/**
	 * Show next page
	 *
	 * @api public
	 */
	ListRender.prototype.next = function () {
	  var list = this.filtered || this.data
	  var max = Math.ceil(list.length/this.perpage) -1
	  this.select(Math.min(max, this.curpage + 1))
	}
	
	/**
	 * Interface for extra action after dom changed
	 *
	 * @api private
	 */
	ListRender.prototype.onchange = function (isRemove) { // eslint-disable-line
	}
	
	/**
	 * Prepend parentNode with newNode
	 *
	 * @param {Element} parentNode
	 * @param {Element} newNode
	 * @api private
	 */
	function prepend(parentNode, newNode) {
	  var node = parentNode.firstChild;
	  if (node) {
	    parentNode.insertBefore(newNode, node)
	  } else {
	    parentNode.appendChild(newNode)
	  }
	}
	
	/**
	 * Assign properties
	 *
	 * @param {Object} to
	 * @param {Object} from
	 * @return {Object}
	 * @api private
	 */
	function assign(to, from) {
	  Object.keys(from).forEach(function (k) {
	    to[k] = from[k]
	  })
	  return to
	}
	
	/**
	 * Create model class by keys
	 *
	 * @param {Array} keys
	 * @return {Function}
	 */
	function createModelClass(keys) {
	  var name = uid(5)
	  var clz = Model(name)
	  keys.forEach(function (k) {
	    clz.attr(k)
	  })
	  return clz
	}
	
	module.exports = ListRender


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var proto = __webpack_require__(41)
	var util = __webpack_require__(42)
	var buildinRe = /^(\$stat|changed|emit|clean|on|off|attrs)$/
	
	/**
	 * Expose `createModel`.
	 */
	
	module.exports = createModel
	
	/**
	 * Create a new model constructor with the given `name`.
	 *
	 * @param {String} name
	 * @return {Function}
	 * @api public
	 */
	
	function createModel(name) {
	  if ('string' != typeof name) throw new TypeError('model name required')
	
	  /**
	   * Initialize a new model with the given `attrs`.
	   *
	   * @param {Object} attrs
	   * @api public
	   */
	
	  function model(attrs) {
	    if (!(this instanceof model)) return new model(attrs)
	    attrs = attrs || {}
	    this._callbacks = {}
	    this.origAttrs = attrs
	    this.attrs = util.assign({}, attrs)
	  }
	
	  // statics
	
	  model.modelName = name
	  model.options = {}
	
	  // prototype
	
	  model.prototype = {}
	  model.prototype.model = model;
	
	  /**
	   * Define instance method
	   *
	   * @param {String} name
	   * @param {Function} fn
	   * @return {Function} self
	   * @api public
	   */
	  model.method = function (name, fn) {
	    this.prototype[name] = fn
	    return this
	  }
	
	  /**
	   * Use function as plugin
	   *
	   * @param {Function} fn
	   * @return {Function} self
	   * @api public
	   */
	  model.use = function (fn) {
	    fn(this)
	    return this
	  }
	
	  /**
	  * Define attr with the given `name` and `options`.
	  *
	  * @param {String} name
	  * @param {Object} optional options
	  * @return {Function} self
	  * @api public
	  */
	
	  model.attr = function(name, options){
	    options = options || {}
	    this.options[name] = options
	
	    if ('id' === name || '_id' === name) {
	      this.options[name].primaryKey = true
	      this.primaryKey = name
	    }
	
	    if (buildinRe.test(name)) throw new Error(name + ' could not be used as field name')
	
	    Object.defineProperty(this.prototype, name, {
	      set: function (val) {
	        var prev = this.attrs[name]
	        var diff = util.diffObject(this.attrs, this.origAttrs)
	        var changedNum = Object.keys(diff).length
	        this.attrs[name] = val
	        this.emit('change', name, val, prev)
	        this.emit('change ' + name, val, prev)
	        if (prev === val) return
	        // make sure when multiple properties changed, only emit once
	        if (changedNum === 0) return this.emit('change $stat', true)
	        if (changedNum === 1 && diff[name] === val) {
	          // became clean
	          this.emit('change $stat', false)
	        }
	      },
	      get: function () {
	        return this.attrs[name]
	      }
	    })
	
	    return this
	  }
	
	  var key
	  for (key in proto) model.prototype[key] = proto[key]
	
	  return model
	}
	


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(31)
	var util = __webpack_require__(42)
	
	/**
	 * Mixin emitter.
	 */
	
	Emitter(exports)
	
	
	/**
	 * Return `false` or an object
	 * containing the "dirty" attributes.
	 *
	 * Optionally check for a specific `attr`.
	 *
	 * @param {String} [attr]
	 * @return {Object|Boolean}
	 * @api public
	 */
	
	exports.changed = function(attr){
	  var changed = util.diffObject(this.origAttrs, this.attrs)
	  if (typeof changed[attr] !== 'undefined') {
	    return changed[attr]
	  }
	  if (Object.keys(changed).length === 0) return false
	  return changed
	}
	
	/**
	 * Set current attrs as original attrs
	 *
	 * @api public
	 */
	exports.clean = function(){
	  for (var k in this.attrs) {
	    this.origAttrs[k] = this.attrs[k]
	  }
	  this.emit('change $stat', false)
	}
	
	
	/**
	 * Set multiple `attrs`.
	 *
	 * @param {Object} attrs
	 * @return {Object} self
	 * @api public
	 */
	
	exports.set = function(attrs){
	  for (var key in attrs) {
	    this[key] = attrs[key]
	  }
	  return this
	}
	
	
	/**
	 * Return the JSON representation of the model.
	 *
	 * @return {Object}
	 * @api public
	 */
	
	exports.toJSON = function(){
	  return this.attrs
	}
	
	/**
	 * Check if `attr` is present (not `null` or `undefined`).
	 *
	 * @param {String} attr
	 * @return {Boolean}
	 * @api public
	 */
	
	exports.has = function(attr){
	  return null != this.attrs[attr]
	}


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Simple diff without nested check
	 * Return the changed props from b
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @api public
	 */
	exports.diffObject = function (a, b) {
	  var res = {}
	  for (var k in a) {
	    if (a[k] !== b[k]) {
	      res[k] = b[k]
	    }
	  }
	  return res
	}
	
	/**
	 * Assign props from `from` to `to` return to
	 *
	 * @param {Object} to
	 * @param {Object} from
	 * @return {Object}
	 * @api public
	 */
	exports.assign = function (to, from) {
	  Object.keys(from).forEach(function (k) {
	    to[k] = from[k]
	  })
	  return to
	}
	


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(44)


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(45)
	var domify = __webpack_require__(47)
	var Binding = __webpack_require__(48)
	var bindings = __webpack_require__(49)
	var Emitter = __webpack_require__(31)
	var filters = __webpack_require__(50)
	
	/**
	 * Reactive
	 *
	 * @param {Element|String} el element or template string
	 * @param {Object} model model with change event emitted
	 * @param {Object} option [Optional] object with `delegate` `bindings` `filters` etc
	 * @api public
	 */
	function Reactive(el, model, option) {
	  if(!(this instanceof Reactive)) return new Reactive(el, model, option)
	  if (typeof el === 'string') el = domify(el)
	  option = option || {}
	  this.bindings = util.assign({}, bindings)
	  // custom bindings first
	  util.assign(this.bindings, option.bindings || {})
	  this.filters = util.assign({}, filters)
	  // custom filters first
	  util.assign(this.filters, option.filters || {})
	  this.binding_names = Object.keys(this.bindings)
	  this.delegate = option.delegate || {}
	  this.model = model
	  this.el = el
	  var config = option.config
	  if (option.nobind) return
	  if (config == null) {
	    // this.checkModel(model)
	    config = this.config = this.generateConfig()
	    this._bindConfig(config)
	  } else {
	    this._bindConfig(config)
	  }
	}
	
	Emitter(Reactive.prototype)
	
	/**
	 * Remove element and unbind events
	 *
	 * @api public
	 */
	Reactive.prototype.remove = function () {
	  if (this._removed) return
	  if (this.el.parentNode) this.el.parentNode.removeChild(this.el)
	  this._removed = true
	  this.emit('remove')
	  // The model may still using, not destroy it
	  this.model = null
	  this.off()
	}
	
	/**
	 * Use generated binding config
	 *
	 * @param {Array} config
	 * @api private
	 */
	Reactive.prototype._bindConfig = function (config) {
	  var root = this.el
	  var reactive = this
	  config.forEach(function (o) {
	    var el = util.findElement(root, o.indexes)
	    var binding = new Binding(reactive, el, o.bindings)
	    binding.active(el)
	    reactive.on('remove', function () {
	      binding.remove()
	    })
	  })
	}
	
	/**
	 * Parse binding object for no
	 *
	 * @param {Element} node
	 * @return {Binding}
	 * @api public
	 */
	Reactive.prototype.parseBinding = function (node, single) {
	  var binding
	  if (node.nodeType === 3) {
	    binding = new Binding(this, node)
	    binding.interpolation(node.textContent)
	  } else if (node.nodeType === 1) {
	    var attributes = node.attributes
	    binding = new Binding(this, node)
	    for (var i = 0, l = attributes.length; i < l; i++) {
	      var name = attributes[i].name
	      var val = attributes[i].value
	      if (~this.binding_names.indexOf(name)) {
	        binding.add(name, val)
	      }
	    }
	    if (single) {
	      binding.interpolation(node.textContent)
	    }
	  }
	  // empty binding
	  if (binding && binding.bindings.length === 0) {
	    binding.remove()
	    binding = null
	  }
	  return binding
	}
	
	/**
	 * Subscribe to prop change on model
	 *
	 * @param {String} prop
	 * @param {Function} fn
	 * @api public
	 */
	Reactive.prototype.sub = function (prop, fn) {
	  var model = this.model
	  model.on('change ' + prop, fn)
	  this.on('remove', function () {
	    model.off('change ' + prop, fn)
	  })
	}
	
	/**
	 * Get delegate function by function name
	 *
	 * @param {String} name
	 * @param {Object} reactive
	 * @return {Function}
	 * @api public
	 */
	Reactive.prototype.getDelegate = function (name) {
	  var delegate = this.delegate
	  var fn = delegate[name]
	  if (!fn || typeof fn !== 'function') throw new Error('can\'t find delegate function for[' + name + ']')
	  return fn
	}
	
	/**
	 * Generate config array
	 *
	 * @return {Array}
	 * @api public
	 */
	Reactive.prototype.generateConfig = function () {
	  var reactive = this
	  var config = []
	  util.iterate(this.el, function (node, indexes) {
	    var single = util.isSingle(node)
	    var binding = reactive.parseBinding(node, single)
	    if (binding) {
	      config.push({
	        indexes: indexes,
	        bindings: binding.bindings
	      })
	      binding.remove()
	    }
	  }.bind(this), [])
	  return config
	}
	
	/**
	 * Bind a new model
	 *
	 * @param {Object} model
	 * @api public
	 */
	Reactive.prototype.bind = function (model) {
	  this.model = model
	  this._bindConfig(this.config)
	}
	
	/**
	 * Generate config array by the same arguments as Reactive constructor
	 *
	 * @param {Element} el
	 * @param {Object} model
	 * @param {Object} opt
	 * @return {Array}
	 * @api public
	 */
	Reactive.generateConfig = function (el, model, opt) {
	  if (typeof el === 'string') el = domify(el)
	  opt = opt || {}
	  opt.nobind = true
	  var reactive =  Reactive(el, model, opt)
	  return reactive.generateConfig()
	}
	
	/**
	 * Create custom bindings with attribute name and function witch is call with
	 * property value eg:
	 * Reactive.createBinding('data-sum', function (value) {
	 *    var props = value.split(',')
	 *    this.bind(props, function (el, model) {
	 *      var val = props.reduce(function(pre, name) {
	 *        return pre + model[name]
	 *      }, 0)
	 *      el.textContent = val
	 *   })
	 * })
	 *
	 *
	 * @param {String} name attribute name
	 * @param {Function} fn
	 * @api public
	 */
	Reactive.createBinding = function (name, fn) {
	  var names = Object.keys(bindings)
	  if (~names.indexOf(name)) throw new Error('Global binding name [' + name+ '] already in use')
	  bindings[name] = fn
	}
	
	/**
	 * Create global custom filter with `name` and `function`
	 * eg:
	 *  Reactive.createFilter('integer', function (str) {
	 *   if (!str) return 0
	 *   var res = parseInt(str, 10)
	 *   return isNaN(res) ? 0 : res
	 * })
	 *
	 * @param {String} name
	 * @param {Function} fn
	 * @api public
	 */
	Reactive.createFilter = function (name, fn) {
	  if (filters[name]) throw new Error('Global filter name [' + name + '] already in use')
	  filters[name] = fn
	}
	
	// use with caution
	Reactive.filters = filters
	Reactive.bindings = bindings
	
	module.exports = Reactive


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var unique = __webpack_require__(46)
	var funcRe = /\([^\s]*\)$/
	
	/**
	 * Check if node has no element child
	 *
	 * @param {Element} node
	 * @return {Boolean}
	 * @api public
	 */
	var isSingle = exports.isSingle = function (node) {
	  var list = node.childNodes
	  var single = true
	  for (var i = list.length - 1; i >= 0; i--) {
	    var v = list[i]
	    if (v.nodeType === 1) {
	      single = false
	      break
	    }
	  }
	  return single
	}
	
	/**
	 * Parse bindings from function, function calls ignored
	 *
	 * @param {Function} fn
	 * @param {Boolean} firstParam or this
	 * @return {Array}
	 * @api private
	 */
	exports.parseBindings = function (fn, firstParam) {
	  var res = []
	  var str = fn.toString()
	  var arr
	  var param
	  if (firstParam) {
	    var ms = str.match(/\(([A-Za-z0-9_$]+?)(?:[\s,)])/)
	    param = ms ? ms[1] : null
	  } else {
	    param = 'this'
	  }
	  var re = new RegExp('\\b' + param + '\\.([\\w_$]+)\\b(?!([\\w$_]|\\s*\\())', 'g')
	  while ((arr = re.exec(str)) !== null) {
	    res.push(arr[1])
	  }
	  return unique(res)
	}
	
	
	/**
	 * Parse str to get the bindings and render function
	 * eg: {first} {last} => {
	 *  bindings: ['first', 'last'],
	 *  fn: function(model) { return model.first + '' + model.last}
	 * }
	 *
	 * @param {string} str textContent
	 * @return {object} bindings and render function
	 * @api public
	 */
	exports.parseInterpolationConfig = function (str) {
	  var bindings = []
	  // function names
	  var fns = []
	  var res = '"'
	  var inside = false
	  var name = ''
	  for (var i = 0; i < str.length; i++) {
	    var c = str[i]
	    if (c === '{') {
	      inside = true
	      res = res + '"'
	    } else if (c === '}') {
	      inside = false
	      res = res + ' + '
	      name = name.trim()
	      if (!name) {
	        res = res + '""'
	      } else if (/\|/.test(name)) {
	        res = res + parseFilters(name, bindings, fns)
	      } else {
	        res = res + 'model.' + name
	        parseStringBinding(name, bindings, fns)
	      }
	      res = res + '+ "'
	      name = ''
	    } else if (inside) {
	      name = name + c
	    } else {
	      if (c === '"') c = '\\"'
	      res = res + c
	    }
	  }
	  res = res.replace(/\n/g, '\\n')
	  res = res + '"'
	  var fn = new Function('model', 'filter', ' return ' + res)
	  return {
	    bindings: unique(bindings),
	    fns: unique(fns),
	    fn: fn
	  }
	}
	
	/**
	 * Parse filters in string, concat them into js function
	 * If there is function call, push the function name into fns eg:
	 * 'first | json' => 'filter.json(model.first)'
	 * 'first | nonull | json' => 'filter.json(filter.nonull(model.first))'
	 *
	 * @param {String} str
	 * @param {Array} fns
	 * @return {String}
	 * @api public
	 */
	var parseFilters = exports.parseFilters = function (str, bindings, fns) {
	  var res = ''
	  if (str[0] === '|') throw new Error('Interpolation can\'t starts with `|` [' + str + ']')
	  var arr = str.split(/\s*\|\s*/)
	  var name = arr[0]
	  res = 'model.' + name
	  parseStringBinding(name, bindings, fns)
	  for (var i = 1; i < arr.length; i++) {
	    var f = arr[i].trim()
	    if (f) {
	      var parts = f.match(/^([\w$_]+)(.*)$/)
	      var args
	      if (parts[2]) {
	        args = parseArgs(parts[2].trim())
	        res = 'filter.' + parts[1] + '(' + res + ', ' + args.join(', ') + ')'
	      } else {
	        res = 'filter.' + f + '(' + res + ')'
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Parse string binding into bindings or fns
	 * eg: 'first' => bindings.push('first')
	 *     'first.last' => bindings.push('first')
	 *     'name.first()' => bindings.push('name')
	 *     'first()' => fns.push('first')
	 *
	 * @param {String} str
	 * @api public
	 */
	var parseStringBinding = exports.parseStringBinding = function (str, bindings, fns) {
	  // if nested, only bind the root property
	  if (~str.indexOf('.')) str = str.replace(/\.[^\s]+$/,'')
	  if (funcRe.test(str)) {
	    fns.push(str.replace(funcRe, ''))
	  } else {
	    bindings.push(str)
	  }
	}
	
	/**
	 * Parse the filter function name from function string
	 * Used for check
	 *
	 * @param {Function} fn
	 * @return {Array}
	 * @api public
	 */
	var filterCallRe = /\bfilter\.([^\s(]+?)\b/g
	exports.parseFilterNames = function (fn) {
	  var res = []
	  var str = fn.toString()
	  var arr
	  while ((arr = filterCallRe.exec(str)) !== null) {
	    res.push(arr[1])
	  }
	  return unique(res)
	}
	
	/**
	 * Check if `str` has interpolation.
	 *
	 * @param {String} str
	 * @return {Boolean}
	 * @api private
	 */
	
	exports.hasInterpolation = function(str) {
	  return !!~str.indexOf('{')
	}
	
	/**
	 * Iterate element with process function and pass generated indexes
	 *
	 * @param {Element} el
	 * @param {Function} process
	 * @param {Array} indexes
	 * @api public
	 */
	var iterate = exports.iterate = function (el, process, indexes) {
	  var single = isSingle(el)
	  process(el, indexes)
	  if (single) return
	  for (var i = 0, l = el.childNodes.length; i < l; i++) {
	    var node = el.childNodes[i]
	    iterate(node, process, indexes.slice().concat([i]))
	  }
	}
	
	/**
	 * Find element with indexes array and root element
	 *
	 * @param {Element} root
	 * @param {Array} indexes
	 * @api public
	 */
	exports.findElement = function (root, indexes) {
	  var res = root
	  for (var i = 0; i < indexes.length; i++) {
	    var index = indexes[i]
	    res = res.childNodes[index]
	    if (!res) return
	  }
	  return res
	}
	
	/**
	 * Parse arguments from string eg:
	 * 'a' false 3 => ['a', false, 3]
	 *
	 * @param {String} str
	 * @return {Array}
	 * @api public
	 */
	var parseArgs = exports.parseArgs = function(str) {
	  var strings = []
	  var s = str.replace(/(['"]).+?\1/g, function (str) {
	    strings.push(str)
	    return '$'
	  })
	  var arr = s.split(/\s+/)
	  for (var i = 0, l = arr.length; i < l; i++) {
	    var v= arr[i]
	    if (v === '$') {
	      arr[i] = strings.shift()
	    }
	  }
	  return arr
	}
	
	/**
	 * Copy properties from `from` to `to` and return `to`
	 *
	 * @param {Object} to
	 * @param {Object} from
	 * @return {Object}
	 * @api public
	 */
	exports.assign = function (to, from) {
	  Object.keys(from).forEach(function (k) {
	    to[k] = from[k]
	  })
	  return to
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

	/*!
	 * array-unique <https://github.com/jonschlinkert/array-unique>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function unique(arr) {
	  if (!Array.isArray(arr)) {
	    throw new TypeError('array-unique expects an array.');
	  }
	
	  var len = arr.length;
	  var i = -1;
	
	  while (i++ < len) {
	    var j = i + 1;
	
	    for (; j < arr.length; ++j) {
	      if (arr[i] === arr[j]) {
	        arr.splice(j--, 1);
	      }
	    }
	  }
	  return arr;
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	
	/**
	 * Expose `parse`.
	 */
	
	module.exports = parse;
	
	/**
	 * Tests for browser support.
	 */
	
	var innerHTMLBug = false;
	var bugTestDiv;
	if (typeof document !== 'undefined') {
	  bugTestDiv = document.createElement('div');
	  // Setup
	  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
	  // Make sure that link elements get serialized correctly by innerHTML
	  // This requires a wrapper element in IE
	  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
	  bugTestDiv = undefined;
	}
	
	/**
	 * Wrap map from jquery.
	 */
	
	var map = {
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  // for script/link/style tags to work in IE6-8, you have to wrap
	  // in a div with a non-whitespace character in front, ha!
	  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
	};
	
	map.td =
	map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option =
	map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>'];
	
	map.polyline =
	map.ellipse =
	map.polygon =
	map.circle =
	map.text =
	map.line =
	map.path =
	map.rect =
	map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];
	
	/**
	 * Parse `html` and return a DOM Node instance, which could be a TextNode,
	 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
	 * instance, depending on the contents of the `html` string.
	 *
	 * @param {String} html - HTML string to "domify"
	 * @param {Document} doc - The `document` instance to create the Node for
	 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
	 * @api private
	 */
	
	function parse(html, doc) {
	  if ('string' != typeof html) throw new TypeError('String expected');
	
	  // default to the global `document` object
	  if (!doc) doc = document;
	
	  // tag name
	  var m = /<([\w:]+)/.exec(html);
	  if (!m) return doc.createTextNode(html);
	
	  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace
	
	  var tag = m[1];
	
	  // body support
	  if (tag == 'body') {
	    var el = doc.createElement('html');
	    el.innerHTML = html;
	    return el.removeChild(el.lastChild);
	  }
	
	  // wrap map
	  var wrap = map[tag] || map._default;
	  var depth = wrap[0];
	  var prefix = wrap[1];
	  var suffix = wrap[2];
	  var el = doc.createElement('div');
	  el.innerHTML = prefix + html + suffix;
	  while (depth--) el = el.lastChild;
	
	  // one element
	  if (el.firstChild == el.lastChild) {
	    return el.removeChild(el.firstChild);
	  }
	
	  // several elements
	  var fragment = doc.createDocumentFragment();
	  while (el.firstChild) {
	    fragment.appendChild(el.removeChild(el.firstChild));
	  }
	
	  return fragment;
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var unique = __webpack_require__(46)
	var util = __webpack_require__(45)
	
	/**
	 * Create binding instance with reactive and el
	 *
	 * @param {Reactive} reactive
	 * @param {Element} el
	 * @param {Array} optional predefined bindings
	 * @api public
	 */
	function Binding(reactive, el, bindings) {
	  this._reactive = reactive
	  this.bindings = bindings || []
	  this.el = el
	}
	
	/**
	 * Add text interpolation binding
	 *
	 * @param {String} textContent el textContent
	 * @api public
	 */
	Binding.prototype.interpolation = function (textContent) {
	  if (textContent.trim() === '') return
	  if (!util.hasInterpolation(textContent)) return
	  var config = util.parseInterpolationConfig(textContent)
	  var props = config.bindings
	  var filters = this._reactive.filters
	  var fns = config.fns
	  if (fns.length) {
	    var arr = this.parseFunctionBindings(fns)
	    props = unique(props.concat(arr))
	  }
	  props = this.filterBindings(props)
	  var func = function (el) {
	    var model = this._reactive.model
	    var render = function () {
	      // much better performance than innerHTML
	      el.textContent = config.fn(model, filters)
	    }
	    this.bindReactive(props, render)
	    render()
	  }
	  this.bindings.push(func)
	}
	
	/**
	 * Get model bindings from function names
	 *
	 * @param {Array} fns function name
	 * @return {Array}
	 * @api private
	 */
	Binding.prototype.parseFunctionBindings = function (fns) {
	  var res = []
	  var model = this._reactive.model
	  fns.forEach(function (name) {
	    var fn = model[name]
	    if (!fn || typeof fn !== 'function') throw new Error('Can\'t find function [' + name + '] on model')
	    res = res.concat(util.parseBindings(fn))
	  })
	  return unique(res)
	}
	
	/**
	 * Add a binding by element attribute
	 *
	 * @param {String} attr attribute name
	 * @param {String} value attribute value
	 * @api public
	 */
	Binding.prototype.add = function (attr, value) {
	  // custom bindings first
	  var fn = this._reactive.bindings[attr]
	  // no binding should be ok
	  if (!fn) return
	  // custom bindings don't return function
	  var func = fn.call(this, value)
	  if (func) this.bindings.push(func)
	}
	
	/**
	 * Filter binding names with model
	 *
	 * @param {Array} props binding names
	 * @return {Array}
	 * @api public
	 */
	Binding.prototype.filterBindings = function (props) {
	  var model = this._reactive.model
	  return props.filter(function (name) {
	    return (name in model)
	  })
	}
	
	/**
	 * Bind all bindings to the element
	 *
	 * @param {Element} el
	 * @api public
	 */
	Binding.prototype.active = function (el) {
	  var self = this
	  if (this.bindings.length === 0) return
	  this.bindings.forEach(function (fn) {
	    fn.call(self, el)
	  })
	}
	
	/**
	 * Bind eventlistener to model attribute[s]
	 *
	 * @param {String|Array} props model attribute[s]
	 * @param {Function} fn listener
	 * @api private
	 */
	Binding.prototype.bindReactive = function (props, fn) {
	  var reactive = this._reactive
	  if (typeof props === 'string') {
	    reactive.sub(props, fn)
	  } else {
	    props.forEach(function (prop) {
	      reactive.sub(prop, fn)
	    })
	  }
	}
	
	/**
	 * Remove this binding
	 *
	 * @api public
	 */
	Binding.prototype.remove = function () {
	  this.bindings = null
	  delete this._reactive
	  delete this.el
	}
	
	/**
	 * Custom binding method: bind properties with function
	 * function is called with element and model
	 *
	 * @param {String|Array} bindings bind properties
	 * @param {Function} fn callback function
	 * @api public
	 */
	Binding.prototype.bind = function (bindings, fn) {
	  var func = function (el) {
	    var self = this
	    var model = this._reactive.model
	    var render = function () {
	      fn.call(self, model, el)
	    }
	    this.bindReactive(bindings, render)
	    render()
	  }
	  this.bindings.push(func)
	}
	
	
	module.exports = Binding


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(45)
	var event = __webpack_require__(17)
	
	/**
	 * Attributes supported.
	 */
	var attrs = [
	  'id',
	  'src',
	  'rel',
	  'cols',
	  'rows',
	  'name',
	  'href',
	  'title',
	  'class',
	  'style',
	  'width',
	  'value',
	  'height',
	  'tabindex',
	  'placeholder'
	]
	/*
	 * events supported
	 */
	var events = [
	  'change',
	  'touchstart',
	  'touchend',
	  'click',
	  'dblclick',
	  'mousedown',
	  'mouseup',
	  'mousemove',
	  'mouseenter',
	  'mouseleave',
	  'scroll',
	  'blur',
	  'focus',
	  'input',
	  'submit',
	  'keydown',
	  'keypress',
	  'keyup'
	]
	
	/**
	 * Create data-render binding with property value
	 *
	 * @param {String} value
	 * @api public
	 */
	exports['data-render'] = function (value) {
	  var fn = this._reactive.getDelegate(value)
	  var bindings = util.parseBindings(fn, true)
	  bindings = this.filterBindings(bindings)
	  return function (el) {
	    var model = this._reactive.model
	    var context = this._reactive.delegate
	    var render = function () {
	      fn.call(context, model, el)
	    }
	    this.bindReactive(bindings, render)
	    render()
	  }
	}
	
	/**
	 * Create attribute interpolation bindings
	 *
	 */
	attrs.forEach(function (attr) {
	  // attribute bindings
	  exports['data-' + attr] = function (value) {
	    var hasInterpolation = util.hasInterpolation(value)
	    var config = util.parseInterpolationConfig(value)
	    var bindings = config.bindings
	    bindings = this.filterBindings(bindings)
	    var func = config.fn
	    var filters = this._reactive.filters
	    return function (el) {
	      var model = this._reactive.model
	      var fn = function () {
	        if (!hasInterpolation) {
	          el.setAttribute(attr, value)
	        } else {
	          // no escape for attribute
	          var str = func(model, filters)
	          el.setAttribute(attr, str)
	        }
	      }
	      this.bindReactive(bindings, fn)
	      fn()
	    }
	  }
	})
	
	/**
	 * Create event bindings
	 *
	 */
	events.forEach(function (name) {
	  exports['on-' + name] = function (value) {
	    var fn = this._reactive.getDelegate(value)
	    return function (el) {
	      var model = this._reactive.model
	      var context = this._reactive.delegate
	      var handler = function (e) {
	        fn.call(context, e, model, el)
	      }
	      event.bind(el, name, handler)
	      this._reactive.on('remove', function () {
	        event.unbind(el, name, handler)
	      })
	    }
	  }
	})
	
	/**
	 * Create checked&selected binding
	 *
	 * @api public
	 */
	var arr = ['checked', 'selected']
	arr.forEach(function (name) {
	  exports['data-' + name] = function (val) {
	    return function (el) {
	      var attr = val || el.getAttribute('name')
	      var value = el.getAttribute('value')
	      var model = this._reactive.model
	      var fn = function () {
	        var v = model[attr]
	        // single checkbox
	        if (value == null) {
	          if (v) {
	            el.setAttribute(name, '')
	          } else {
	            el.removeAttribute(name)
	          }
	          return
	        }
	        if (v == null) return el.removeAttribute(name)
	        // checkbox
	        if (Array.isArray(v) && ~v.indexOf(value)) {
	          el.setAttribute(name, '')
	        // radio
	        } else if (v.toString() === value) {
	          el.setAttribute(name, '')
	        } else {
	          el.removeAttribute(name)
	        }
	      }
	      this.bindReactive(attr, fn)
	      fn()
	    }
	  }
	})
	
	exports['data-html'] = function (value) {
	  return function (el) {
	    var model = this._reactive.model
	    var fn = function () {
	      var v = model[value]
	      el.innerHTML = v == null ? '' : v
	    }
	    this.bindReactive(value, fn)
	    fn()
	  }
	}


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Avoid of null and undefined in output
	 *
	 * @param {String} html
	 * @return {String}
	 * @api public
	 */
	exports.nonull = function (str) {
	  if (str == null) return ''
	  return String(str)
	}
	
	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */
	
	exports.json = function (value, indent) {
	  return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	}
	
	/**
	 * 'abc' => 'Abc'
	 */
	
	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	/**
	 * 'abc' => 'ABC'
	 */
	
	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}
	
	/**
	 * 'AbC' => 'abc'
	 */
	
	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}
	
	/**
	 * 12345 => 12,345.00
	 *
	 * @param {Mixed} value
	 * @param {Number} precision
	 */
	
	var digitsRE = /(\d)(?=(?:\d{3})+$)/g
	exports.currency = function (value, precision) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  precision = precision == null ? 2 : precision
	  value = Number(value)
	  value = value.toFixed(precision)
	  var parts = value.split('.'),
	  fnum = parts[0],
	  decimal = parts[1] ? '.' + parts[1] : ''
	
	  return fnum.replace(digitsRE, '$1,') + decimal
	}
	
	/**
	 * Reverse string
	 *
	 * @param {string} str
	 * @return {String}
	 * @api public
	 */
	exports.reverse = function (str) {
	  if (!str && str !== 0) return ''
	  return String(str).split(/\s*/).reverse().join('')
	}


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Export `uid`
	 */
	
	module.exports = uid;
	
	/**
	 * Create a `uid`
	 *
	 * @param {String} len
	 * @return {String} uid
	 */
	
	function uid(len) {
	  len = len || 7;
	  return Math.random().toString(35).substr(2, len);
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var domify = __webpack_require__(47)
	var debounce = __webpack_require__(53)
	var template = __webpack_require__(55)
	var events = __webpack_require__(56)
	
	/**
	 * Init more with element(for insertAfter), callback ,and scrollable
	 *
	 * @param  {Element}  el
	 * @param  {Function}  fn
	 * @param {Element} scrollable
	 * @api public
	 */
	function More(el, fn, scrollable) {
	  if (!(this instanceof More)) return new More(el, fn, scrollable)
	  this.el = el
	  this.callback = fn
	  this.div = domify(template)
	  insertAfter(this.el, this.div)
	  this.scrollable = scrollable = scrollable || el.parentNode
	  this._onscroll = debounce(this.onscroll.bind(this), 100)
	  events.bind(scrollable, 'scroll', this._onscroll)
	}
	
	/**
	 * On scroll event handler
	 *
	 * @api private
	 */
	More.prototype.onscroll = function (e) {
	  if (this.loading || this._disabled) return
	  if (!check(this.scrollable) && e !== true) return
	  this.div.style.display = 'block'
	  // var h = computedStyle(this.el, 'height')
	  this.loading = true
	  var self = this
	  var cb = function () {
	    self.loading = false
	    self.div.style.display = 'none'
	  }
	  var res = this.callback(cb)
	  if (res && typeof res.then === 'function') {
	    res.then(cb, cb)
	  }
	}
	
	/**
	 * Disable loading more data
	 *
	 * @return {undefined}
	 * @api public
	 */
	More.prototype.disable = function () {
	  this._disabled = true
	  this.div.style.display = 'none'
	  this.loading = false
	}
	
	/**
	 * Force more to start loading
	 *
	 * @return {undefined}
	 * @api public
	 */
	More.prototype.load = function () {
	  this.onscroll(true)
	}
	/**
	 * Set the loading text
	 *
	 * @param {String} text
	 * @api public
	 */
	More.prototype.text = function (text) {
	  this.div.querySelector('.more-text').innerHTML = text
	}
	
	/**
	 * Remove the appended element and unbind event
	 *
	 * @return {undefined}
	 * @api public
	 */
	More.prototype.remove = function () {
	  events.unbind(this.scrollable, 'scroll', this._onscroll)
	  this.div.parentNode.removeChild(this.div)
	}
	
	/**
	 * check if scrollable scroll to end
	 */
	function check(scrollable) {
	  if (scrollable === window) {
	    // viewport height
	    var supportPageOffset = window.pageXOffset !== undefined
	    var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
	    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	    var scrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
	    if (getDocHeight() - vh == scrollY) return true
	  } else if (scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight < 1) {
	    return true
	  }
	  return false
	}
	
	function insertAfter(referenceNode, newNode) {
	  var next = referenceNode.nextSibling
	  if (next) {
	    referenceNode.parentNode.insertBefore(newNode, next)
	  } else {
	    referenceNode.parentNode.appendChild(newNode)
	  }
	}
	
	function getDocHeight() {
	    var D = document;
	    return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight);
	}
	
	module.exports = More


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(54);
	
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	
	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;
	
	  function later() {
	    var last = now() - timestamp;
	
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	};


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"more-loading\">\n  <i class=\"more-refresh more-spin\"></i> <span class=\"more-text\">加载中...</span>\n</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

	var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
	    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
	    prefix = bind !== 'addEventListener' ? 'on' : '';
	
	/**
	 * Bind `el` event `type` to `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.bind = function(el, type, fn, capture){
	  el[bind](prefix + type, fn, capture || false);
	  return fn;
	};
	
	/**
	 * Unbind `el` event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.unbind = function(el, type, fn, capture){
	  el[unbind](prefix + type, fn, capture || false);
	  return fn;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var classes = __webpack_require__(58)
	var domify = __webpack_require__(47)
	var once = __webpack_require__(60)
	var template = __webpack_require__(62)
	
	var LOADING_TEXT = '加载中...'
	var PULL_TEXT = '下拉刷新'
	var RELEASE_TEXT = '释放更新'
	
	function prepend(parentNode, node) {
	  if (parentNode.firstChild) {
	    parentNode.insertBefore(node, parentNode.firstChild)
	  } else {
	    parentNode.appendChild(node)
	  }
	}
	
	/**
	 * `el` the scrollable element
	 * `callback` is called when loading start, the first argument which is a callback function should be called after the dom prepend to the list.
	 * `option` object could contain `PULL_TEXT` `RELEASE_TEXT` `LOADING_TEXT` and `timeout` for the request timeout in millisecond.
	 * `option.template` contains a custom template(string or element) for the inserted element
	 * `option.timeout` millisecond of request timeout, default `10000`
	 *
	 * @param  {Element}  el
	 * @param  {Object} opt
	 * @param  {Function}  fn
	 * @api public
	 */
	module.exports = function PTR(el, opt, fn) {
	  if (!(this instanceof PTR)) return new PTR(el, opt, fn)
	  if (typeof opt === 'function') {
	    fn = opt
	    opt = {}
	  }
	  this.el = el
	  this.LOADING_TEXT = opt.LOADING_TEXT || LOADING_TEXT
	  this.PULL_TEXT = opt.PULL_TEXT || PULL_TEXT
	  this.RELEASE_TEXT = opt.RELEASE_TEXT || RELEASE_TEXT
	  this.timeout = opt.timeout || 10000
	  var start
	  var loading
	  var box
	  var tel = opt.template
	  // custom template
	  if (typeof tel === 'string') {
	    box = domify(template)
	  } else if (tel && tel.nodeType) {
	    box = opt.template
	  } else {
	    box = domify(template)
	  }
	  var first = el.firstElementChild
	  if (first) {
	    prepend(first, box)
	  } else {
	    prepend(el, box)
	  }
	  var imgEl = box.querySelector('.ptr_image')
	  var textEl = box.querySelector('.ptr_text')
	  var self = this
	  function onscroll() {
	    if (loading) return
	    var top = el.scrollTop
	    if (top < 0 && top >= - 40) {
	      textEl.textContent = self.PULL_TEXT
	    }
	    if (top < -40) {
	      classes(imgEl).add('ptr_rotate')
	      textEl.textContent = self.RELEASE_TEXT
	      start = true
	    } else {
	      classes(imgEl).remove('ptr_rotate')
	      start = false
	    }
	  }
	  el.addEventListener('scroll', onscroll, false)
	
	  function callback() {
	    el.scrollTop = 0
	    loading = false
	    textEl.textContent = self.PULL_TEXT
	    imgEl.className = 'ptr_image'
	  }
	
	  /**
	   * Refresh for more data
	   *
	   * @param  {Event}  event
	   * @api public
	   */
	  var refresh = this.refresh = function (e) {
	      if (e) e.stopImmediatePropagation()
	      el.scrollTop = -40
	      imgEl.className += ' ptr_loading'
	      textEl.textContent = self.LOADING_TEXT
	      loading = true
	      var timeout = setTimeout(callback, self.timeout)
	      var cb = once(function () {
	        clearTimeout(timeout)
	        callback()
	      })
	      var res = fn(cb)
	      if (res && typeof res.then === 'function') {
	        res.then(cb, cb)
	      }
	  }
	
	  var end = function (e) {
	    if (start) {
	      refresh(e)
	    }
	    start = false
	  }
	  document.addEventListener('touchend', end)
	
	  /**
	   * Unbind event listener and remove inserted element
	   *
	   * @return {undefined}
	   * @api public
	   */
	  this.unbind = function () {
	    el.removeEventListener('scroll', onscroll)
	    document.removeEventListener('touchend', end)
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var index = __webpack_require__(59);
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var wrappy = __webpack_require__(61)
	module.exports = wrappy(once)
	
	once.proto = once(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once(this)
	    },
	    configurable: true
	  })
	})
	
	function once (fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true
	    return f.value = fn.apply(this, arguments)
	  }
	  f.called = false
	  return f
	}


/***/ },
/* 61 */
/***/ function(module, exports) {

	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
	module.exports = wrappy
	function wrappy (fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)
	
	  if (typeof fn !== 'function')
	    throw new TypeError('need wrapper function')
	
	  Object.keys(fn).forEach(function (k) {
	    wrapper[k] = fn[k]
	  })
	
	  return wrapper
	
	  function wrapper() {
	    var args = new Array(arguments.length)
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	    var ret = fn.apply(this, args)
	    var cb = args[args.length-1]
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach(function (k) {
	        ret[k] = cb[k]
	      })
	    }
	    return ret
	  }
	}


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ptr_box\">\n  <div class=\"ptr_container\">\n    <div class=\"ptr_image\"></div>\n    <div class=\"ptr_text\">下拉刷新</div>\n  </div>\n</div>\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = [
		{
			"age": 10,
			"text": "Exercitation cupidatat quis cupidatat voluptate tempor ea culpa consequat cupidatat.",
			"id": "b229358e-d858-4c8c-99a5-65be1a50b675"
		},
		{
			"age": 53,
			"text": "Est qui officia consequat elit officia officia est sint amet quis ea.",
			"id": "6670283c-d1e8-4fae-ba14-dfd6840d56db"
		},
		{
			"age": 3,
			"text": "Anim laboris anim do cupidatat sunt officia ipsum aliqua.",
			"id": "dcceec74-27f5-45e8-80fe-789e33a58e6a"
		},
		{
			"age": 3,
			"text": "Culpa excepteur et irure dolor et incididunt sit Lorem aliquip do.",
			"id": "3922934d-676c-4341-970b-275d5f1027fb"
		},
		{
			"age": 23,
			"text": "Officia ut consequat nisi deserunt eu eiusmod nulla qui magna laboris ex excepteur enim.",
			"id": "c5fb0c3a-43bd-4197-84f8-4f5215de9b66"
		},
		{
			"age": 24,
			"text": "Qui veniam adipisicing labore minim consectetur commodo ullamco excepteur mollit aliqua.",
			"id": "8cc1c8ee-026a-44be-87e7-b2079d002448"
		},
		{
			"age": 22,
			"text": "Commodo deserunt esse id adipisicing irure veniam officia tempor incididunt velit dolore nostrud.",
			"id": "8576c665-16f3-4277-82f2-617fda71e93d"
		},
		{
			"age": 16,
			"text": "Sunt tempor cillum elit esse incididunt quis nulla deserunt elit anim dolore minim.",
			"id": "2648922a-a643-4423-b880-e19dc3702045"
		},
		{
			"age": 31,
			"text": "Velit do exercitation sint in id qui anim magna.",
			"id": "25e4d4d2-ad6b-4d00-a7b1-db2c1c070f2f"
		},
		{
			"age": 59,
			"text": "Veniam aliquip do ullamco magna reprehenderit sint quis eu.",
			"id": "1ce4ad5d-d272-4018-a4f3-f0a95e9f579a"
		},
		{
			"age": 10,
			"text": "Dolore irure Lorem ut enim esse.",
			"id": "976d2f6f-fcc6-4185-9ee6-5efeebca7915"
		},
		{
			"age": 58,
			"text": "Est est qui veniam veniam eiusmod aliqua consectetur veniam nulla ipsum commodo sint culpa deserunt.",
			"id": "e2bab456-8f19-4e6a-87f5-bd49c7ea9817"
		},
		{
			"age": 45,
			"text": "Adipisicing aliquip dolore aliqua reprehenderit consequat enim.",
			"id": "e6721409-836d-45b1-83c8-17675d31ad0c"
		},
		{
			"age": 55,
			"text": "Duis amet sunt id dolor nostrud elit non eu.",
			"id": "e18073a3-a425-40c4-87ce-22c887fdb300"
		},
		{
			"age": 41,
			"text": "Pariatur minim consequat velit ullamco reprehenderit adipisicing consequat.",
			"id": "fca10e74-00e2-4377-b5f2-8800e849c227"
		},
		{
			"age": 27,
			"text": "Id ullamco est consectetur nisi quis tempor exercitation.",
			"id": "9e209cc9-cbdb-4959-8a51-ada24b41c63d"
		},
		{
			"age": 31,
			"text": "Labore sit reprehenderit excepteur veniam Lorem sunt qui occaecat sint.",
			"id": "df64605c-a050-4a54-be9f-62c77a0d39b5"
		},
		{
			"age": 30,
			"text": "Occaecat non do irure adipisicing do anim excepteur adipisicing aliqua dolore fugiat ullamco reprehenderit consectetur.",
			"id": "4f5aaf97-6ee3-49f1-acee-c2f96bd6a6dd"
		},
		{
			"age": 53,
			"text": "Ipsum nostrud dolor sunt sit pariatur cillum non laboris.",
			"id": "11ccb6bd-38ba-43d3-87c3-9dc8816cefed"
		},
		{
			"age": 55,
			"text": "Dolor esse irure proident pariatur esse.",
			"id": "d3eb299c-cfe8-4b58-bc44-7560ef6d2c8b"
		},
		{
			"age": 54,
			"text": "Laboris est reprehenderit quis officia mollit ea excepteur amet quis commodo ad tempor aliqua id.",
			"id": "2fdf972b-7724-4fb8-9c2c-9a7744efb771"
		},
		{
			"age": 55,
			"text": "Ullamco quis amet Lorem et anim tempor nostrud aliquip sunt est Lorem culpa officia.",
			"id": "f4490946-4f98-43d4-a7ed-890897b6e5a1"
		},
		{
			"age": 47,
			"text": "Nisi amet tempor minim ullamco.",
			"id": "8a757bef-e7bc-4fc4-aeb7-68d507de4976"
		},
		{
			"age": 44,
			"text": "Laborum mollit est et est amet exercitation amet esse excepteur aute.",
			"id": "8d4df5f4-d86a-473c-b413-144e68b0d83f"
		},
		{
			"age": 20,
			"text": "Exercitation irure minim voluptate cupidatat Lorem laborum dolore laboris cillum non incididunt.",
			"id": "5fea7715-b4c7-4d97-a7f0-b23c42bcfbaf"
		},
		{
			"age": 53,
			"text": "Commodo nulla pariatur irure commodo elit pariatur officia nisi veniam exercitation irure ipsum magna ipsum.",
			"id": "69d98e77-3eca-4012-b7dc-c656eb1696e0"
		},
		{
			"age": 8,
			"text": "Dolor qui sit nostrud irure consequat eiusmod laborum exercitation sint tempor ad culpa duis.",
			"id": "f6d770d9-65dd-4023-8e41-ce1ec695a516"
		},
		{
			"age": 47,
			"text": "Voluptate nisi adipisicing cillum pariatur veniam magna consequat.",
			"id": "19dec616-88cc-4920-b56d-b2ec13241925"
		},
		{
			"age": 31,
			"text": "Incididunt eu do occaecat aute est cillum occaecat magna nulla in mollit consectetur.",
			"id": "44d1bb0d-cf66-4f1c-b377-431ca07d720a"
		},
		{
			"age": 27,
			"text": "Magna id officia aliquip nostrud et enim do eu culpa ea amet proident aliquip.",
			"id": "45f40775-3af6-45ca-9e8c-d12ce44e6e67"
		},
		{
			"age": 17,
			"text": "Adipisicing aliqua veniam est aute eu nisi esse culpa culpa elit mollit excepteur commodo occaecat.",
			"id": "be0267b0-c26e-4541-bcde-a54ff9e3869e"
		},
		{
			"age": 26,
			"text": "Magna sint laborum fugiat mollit anim laboris sint ullamco deserunt occaecat ut ut.",
			"id": "eed431ed-7f9b-46f4-beae-5aa6b03c7c7c"
		},
		{
			"age": 13,
			"text": "Occaecat laborum est labore veniam reprehenderit aliqua in.",
			"id": "c55f23ab-4dc5-4ee1-83fe-bb66cb14cd88"
		},
		{
			"age": 50,
			"text": "Anim amet labore tempor occaecat.",
			"id": "edf5904c-b386-49d0-bd91-b413dbcfb4a4"
		},
		{
			"age": 10,
			"text": "Culpa et ad commodo irure tempor.",
			"id": "10ec2e1b-35f7-4414-abc9-a65e2f178db9"
		},
		{
			"age": 15,
			"text": "Sint quis velit duis incididunt duis excepteur.",
			"id": "e7a2f385-2480-49f7-9474-132ee00cd36e"
		},
		{
			"age": 54,
			"text": "In ex sunt veniam non elit.",
			"id": "8d8aaf23-4b17-4eb3-9a74-922521108d74"
		},
		{
			"age": 43,
			"text": "Aute qui eu labore culpa eu cupidatat.",
			"id": "0ce3b66f-4bc3-4524-90dc-47099e3fd5a3"
		},
		{
			"age": 25,
			"text": "Cillum consectetur veniam in tempor tempor cillum enim elit nisi ut eu sunt sunt sunt.",
			"id": "99126cca-83eb-4697-878e-60d51669f69a"
		},
		{
			"age": 50,
			"text": "Cupidatat irure non anim irure cupidatat culpa eu pariatur incididunt eu sunt nostrud dolore consectetur.",
			"id": "54b1a328-9c22-4d29-a12a-7ecf33abdac6"
		},
		{
			"age": 57,
			"text": "Quis do dolor nulla aliquip anim laboris laborum minim commodo nulla.",
			"id": "a0ec519e-175b-4bf6-aa4d-9743aea236da"
		},
		{
			"age": 6,
			"text": "Nostrud sit sint nostrud id est commodo velit consectetur deserunt dolore aliquip.",
			"id": "db3e7dc9-1a54-45fc-ac99-93970d4ee1c3"
		},
		{
			"age": 9,
			"text": "Reprehenderit ex incididunt sint labore aliqua commodo ullamco esse occaecat occaecat ex labore.",
			"id": "006cdcfb-c973-403a-a0ce-4c4a9d0117ac"
		},
		{
			"age": 6,
			"text": "Excepteur deserunt sunt nostrud irure ullamco sit sint do nisi duis.",
			"id": "6ad3e8ba-c6a8-4afe-b77a-a448a88aa63f"
		},
		{
			"age": 16,
			"text": "Elit amet ipsum magna qui exercitation ut voluptate.",
			"id": "d19b339a-c60b-4e19-91ce-be09aea06950"
		},
		{
			"age": 49,
			"text": "Adipisicing labore in exercitation labore culpa commodo id.",
			"id": "a887bb95-45a6-4484-9725-322126194cea"
		},
		{
			"age": 27,
			"text": "Dolore ex ullamco nulla pariatur.",
			"id": "e40ba75f-c295-43de-b7dc-762b4640dadf"
		},
		{
			"age": 38,
			"text": "Magna fugiat ullamco enim cillum qui nostrud adipisicing aute do Lorem.",
			"id": "d54a526c-bb1d-48e0-a4c3-f7ca9769cee1"
		},
		{
			"age": 52,
			"text": "Esse labore ea aliqua pariatur nulla ex sunt in in elit.",
			"id": "93a0a681-368a-4b78-a778-9ce24acc185a"
		},
		{
			"age": 26,
			"text": "Nisi nostrud incididunt ex proident non do.",
			"id": "5a5ff8f3-20c2-4170-a02c-a0f0e5b51542"
		},
		{
			"age": 30,
			"text": "Irure mollit commodo qui pariatur.",
			"id": "c549eaa9-9dc4-4f4f-9b2a-6343570a32d0"
		},
		{
			"age": 24,
			"text": "Irure occaecat exercitation amet mollit velit anim esse exercitation irure proident.",
			"id": "b4c4f910-c461-4ed7-927a-0b391aef39a5"
		},
		{
			"age": 3,
			"text": "Fugiat laborum do Lorem non anim tempor elit aliqua proident non.",
			"id": "61924bed-021f-44ee-b515-78959be91658"
		},
		{
			"age": 43,
			"text": "Qui ipsum ut reprehenderit fugiat fugiat fugiat aliquip irure dolore commodo irure.",
			"id": "fd368e8d-c1d3-4057-a34d-fd467d3197af"
		},
		{
			"age": 43,
			"text": "Nulla veniam eu ex sunt proident irure et nostrud ex minim aliqua tempor.",
			"id": "f2ff5dae-969c-4c1c-a56c-80b3bd5ff6b6"
		},
		{
			"age": 20,
			"text": "Aliquip velit voluptate Lorem ea anim sunt cupidatat sunt consequat id duis deserunt qui in.",
			"id": "5f626c40-b90f-4cc5-b029-582a9b1b6d95"
		},
		{
			"age": 37,
			"text": "Sit dolore ex et culpa.",
			"id": "0ea4545c-96a9-4170-a410-de6e024592b9"
		},
		{
			"age": 28,
			"text": "Lorem non adipisicing adipisicing do Lorem amet eiusmod.",
			"id": "9b662c9a-8cb3-4dc0-b006-2590e0dc2075"
		},
		{
			"age": 48,
			"text": "Elit est Lorem id sunt consectetur elit ullamco sunt.",
			"id": "c59e35e9-8aef-4a49-a743-931185573ef3"
		},
		{
			"age": 31,
			"text": "Aute consequat labore adipisicing laboris et pariatur minim ullamco tempor quis voluptate nisi officia.",
			"id": "38290dd1-393a-41f6-9bf9-c575f02d96e1"
		},
		{
			"age": 35,
			"text": "Veniam ea commodo proident reprehenderit ullamco ut commodo sint dolor velit fugiat.",
			"id": "4d23276d-3dde-41b3-8589-0d3dca30d275"
		},
		{
			"age": 44,
			"text": "Occaecat occaecat labore velit ea commodo adipisicing occaecat in aliqua magna eu.",
			"id": "287e7e8b-3420-48d2-967b-3f9019409cec"
		},
		{
			"age": 46,
			"text": "Consequat reprehenderit qui deserunt dolore culpa ex ad.",
			"id": "afd7f390-eec0-4f00-b0c8-df2266322803"
		},
		{
			"age": 29,
			"text": "Duis id culpa minim exercitation et consequat reprehenderit.",
			"id": "e956b77f-abd2-41fc-9b97-b3560a6d98b4"
		},
		{
			"age": 46,
			"text": "Laborum ullamco sint minim veniam.",
			"id": "1ee0b1d6-224f-4669-bb3b-e9fb5641bcbd"
		},
		{
			"age": 51,
			"text": "Elit minim ut consequat culpa commodo nisi qui est incididunt consequat.",
			"id": "ee565b8a-1389-41c4-90f9-7c0ffdb73f3a"
		},
		{
			"age": 47,
			"text": "Id veniam exercitation eu ex laboris minim.",
			"id": "d3ddc418-84d4-44aa-be4b-970ac8297933"
		},
		{
			"age": 18,
			"text": "Culpa anim pariatur do ipsum laboris quis commodo.",
			"id": "b1180c6f-7f0e-4de3-80fe-dad2e4df837d"
		},
		{
			"age": 13,
			"text": "Culpa adipisicing laboris quis mollit consectetur irure nulla velit veniam sint laborum tempor.",
			"id": "f361a6c1-82d3-46c5-95c1-81928f04d323"
		},
		{
			"age": 12,
			"text": "Cupidatat do sint ex deserunt magna sit.",
			"id": "75628273-5300-4e54-a895-067cd2531d81"
		},
		{
			"age": 5,
			"text": "In incididunt deserunt minim ea non nostrud ut et aliquip.",
			"id": "981aa1c1-2afe-4e42-b9e9-89a133ef9320"
		},
		{
			"age": 24,
			"text": "Magna anim do ea minim excepteur ea commodo.",
			"id": "a409b15e-f857-46c0-aa37-6445cd5c8444"
		},
		{
			"age": 7,
			"text": "Deserunt id consectetur laboris quis sint velit nisi.",
			"id": "c54acd43-57ea-43b8-b4b9-e5575c10f72e"
		},
		{
			"age": 32,
			"text": "Exercitation do aute occaecat duis adipisicing tempor irure reprehenderit ut ex sunt commodo.",
			"id": "bb0636cd-7df6-47cc-acb4-cd3227a512e6"
		},
		{
			"age": 44,
			"text": "Enim voluptate culpa incididunt cupidatat magna dolor consectetur cillum ea dolore laboris.",
			"id": "1ce8126e-d1fc-4128-b8fd-acb6985a3e6f"
		},
		{
			"age": 46,
			"text": "Ipsum aute dolor occaecat minim magna enim nisi velit in exercitation cupidatat reprehenderit ullamco id.",
			"id": "8382f10d-a7db-4685-af07-a5011e393450"
		},
		{
			"age": 20,
			"text": "Magna elit minim commodo adipisicing in cupidatat anim occaecat eiusmod.",
			"id": "33baeaa5-fd5e-4074-8d4b-df54a261aad1"
		},
		{
			"age": 32,
			"text": "Ad proident non occaecat do duis.",
			"id": "49391aa2-c9f8-460f-90fb-86c712e29f30"
		},
		{
			"age": 14,
			"text": "Cupidatat dolore aliquip sunt mollit non exercitation et.",
			"id": "d7ec70a7-eb74-4598-ab1b-29ea14e1da19"
		},
		{
			"age": 35,
			"text": "Voluptate ad eu culpa dolore enim aliquip adipisicing aute ullamco.",
			"id": "ebaf52ec-bceb-4065-a7e6-a5f40b8162c4"
		}
	];

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map