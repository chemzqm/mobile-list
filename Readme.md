# Mobile-list

[![NPM version](https://img.shields.io/npm/v/mobile-list.svg?style=flat-square)](https://www.npmjs.com/package/mobile-list)
[![Dependency Status](https://img.shields.io/david/chemzqm/mobile-list.svg?style=flat-square)](https://david-dm.org/chemzqm/mobile-list)
[![Build Status](https://img.shields.io/travis/chemzqm/mobile-list/master.svg?style=flat-square)](http://travis-ci.org/chemzqm/mobile-list)
[![Coverage Status](https://img.shields.io/coveralls/chemzqm/mobile-list/master.svg?style=flat-square)](https://coveralls.io/github/chemzqm/mobile-list?branch=master)

Full featured list build for mobile first, while design ignorant.

## Features

* Optional [iscroll](https://github.com/chemzqm/iscroll), [pull-to-refresh](https://github.com/chemzqm/pull-to-refresh) and [more](https://github.com/chemzqm/more)
* Reactive support by [reactive-lite](https://github.com/chemzqm/reactive-lite)
* Sort and filter data on remote/local mode
* Event delegate for better performance

## Install

    npm i mobile-list

## Usage

``` js
var List = require('mobile-list')
var template = require('./template.html')
var list = new List(template, window, {
  selector: 'ul.mylist'
})
api.loadUsers(function(err, arr) {
  list.setData(arr)
})
```

## Events

* `sort` emit with params when remote sort needed (including `sortField` `sortDirection`)
* `filter` emit with params when remote filter needed (including `filterField` `filterValud`)
* `page` emit with params when remote paging needed (including `curpage`, `perpage`)
* `remove` emit just before this component removed

## API

### List(template, scrollable, [option])

* `template` template string or element for repeat render
* `scrollable` the scrollable element
* `option` optional option for [list-render](https://github.com/chemzqm/list-render)
* `option.perpage` max page count perpage for paging, works with [pager](https://github.com/chemzqm/pager)
* `option.selector` selector for parentNode of repeat template, default `ul`
* `option.delegate` delegate object for [reactive](https://github.com/chemzqm/reactive-lite)
* `option.bindings` bindings object for [reactive](https://github.com/chemzqm/reactive-lite)
* `option.filters` filters object for [reactive](https://github.com/chemzqm/reactive-lite)
* `option.model` [model](https://github.com/chemzqm/model) class used for generate model
* `option.empty` String or Element rendered in parentNode when internal data list is empty
* `option.limit` the limit number for render when `setData()` (default no limit)
* `option.moreCount` works with `option.limit` it limit count of items to render with `.more(n)` method when last item visible on scroll, default 10
* `option.autoHeight` set the height of parentNode even if data not rendered (need limit to work, items should have same height)

List inherits all methods from [list-render](https://github.com/chemzqm/list-render), the extra methods are shown below

### .iscroll([option])

Use iscroll for smooth scrolling, set `option.handlebar` to true if your want handlebar to show

### .pullToRefresh([option], callback)

* `options` is [pull-to-refresh](https://github.com/chemzqm/pull-to-refresh) options, which may have texts or/and template
* `callback` should return a promise which resolve an array of data(or reject error) for render
* `callback` is called with additional param `pullTimestamp` which contains time stamp of latest succeed pull.

### .useMore(callback)

Use [more](https://github.com/chemzqm/more) for loading more data,

callback should return promise which resolve an array of data(or reject error) for render

### .bind(type, selector, handler)

Delegate event `type` to `selector` with `handler`,
handler is called with event and a reactive model

### .local()

Make list works on local model, which means sort, filter and paging  only happens locally

### .sort(field, dir, [method])

Sort the data by field, direction or method, when it's remote mode(default mode), emit event only

### .filter(field, val|function)

Filter the data by field, val or function, when it's remote mode(default mode), emit event only

### .refresh()

Let pull-to-refresh to refresh more data

### .setTotal(n)

Set total data count for paging, can not used for local mode

### .remove()

Remove all rendered repeat elements and unbind all events
