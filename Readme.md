# Mobile-list

[![Build Status](https://secure.travis-ci.org/chemzqm/mobile-list.svg)](http://travis-ci.org/chemzqm/mobile-list)
[![Coverage Status](https://coveralls.io/repos/chemzqm/mobile-list/badge.svg?branch=master&service=github)](https://coveralls.io/github/chemzqm/mobile-list?branch=master)

Full featured list build for mobile first, while design ignorant.

Basic works, need more examples and test

## Features

* Optional [iscroll](https://github.com/chemzqm/iscroll), [pull-to-refresh](https://github.com/chemzqm/pull-to-refresh) and [more](https://github.com/chemzqm/more)
* Reactive support by [reactive-lite](https://github.com/chemzqm/reactive-lite)
* Sort and filter data on remote/local mode
* Event delegate for better performance

## Install

    npm i mobile-list -D

## Usage

``` js
```

## Events

* `sort` emit with params when remote sort needed (including `sortField` `sortDirection`)
* `filter` emit with params when remote filter needed (including `filterField` `filterValud`)
* `page` emit with params when remote paging needed (including `curpage`)
* `remove` emit just before this component removed

## API

### List(template, scrollable, [option])

* `template` template string or element for repeat render
* `scrollable` the scrollable element
* `option` optional option for [list-render](https://github.com/chemzqm/list-render)
* `option.parentSelector` selector for parentNode of repeat template, default `ul`
* `option.moreCount` limit how many more items to render with `.more(n)` method when last item visible on scrollable, default 10
* `option.delegate` delegate object for [reactive](https://github.com/chemzqm/reactive-lite)
* `option.bindings` bindings object for [reactive](https://github.com/chemzqm/reactive-lite)
* `option.filters` filters object for [reactive](https://github.com/chemzqm/reactive-lite)
* `option.model` [model]() class used for generate model
* `option.limit` the limit number for render when `setData()` (default no limit)
* `option.empty` String or Element rendered in parentNode when internal data list is empty

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

### .remove()

Remove all rendered repeat elements and unbind all events
