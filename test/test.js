/*global describe, it, beforeEach, afterEach*/
var assert = require('assert')

var el
beforeEach(function () {
  el = document.createElement('div')
  document.body.appendChild(el)
})

afterEach(function () {
  document.body.removeChild(el)
})
