# requirejs-steps

> basic steps to use require.js

* [Require.js Steps](src/README.md)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`

* Must have [bower](http://bower.io/) node package installed globally. `sudo npm install -g bower`


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/soudev/requirejs-steps.git
cd requirejs-steps
npm install
```


## Commands

> run gulp

```bash
npm start
```

### Gulp

> development workflow

```bash
gulp
```


## Require.js Steps

* [00](src/00) - without require.js

> avoid, bad practice, everything is global

```javascript
var att = 'some att value';

function logic() {
  return 'something';
}
```

* [01](src/01) - without require.js, js app with namespaces

> good practice

```javascript
(function(global, undefind) {

  // main app namespace
  var app = global.app = global.app || {};

  // private

  var att = 'some att value';

  function logic() {
    return 'something';
  }

  // public - local namespace
  app.localNamespace = {
    att: att,
    logic: logic
  };

})(window);
```

* [02](src/02) - AMD Style

```javascript
// AMD Style
define(['myDependency'], function(myDependency) {  
  // private

  return {
    /* public */
  };
});
```

* [03](src/03) - CommonJS Style

```javascript
// CommonJS Style
define(function(require) {  
  var myDependency = require('myDependency');

  // private

  return {
    /* public */
  };
});
```


## Commands on Mac

### Create commands list

```bash
npm init

npm install \
  lazypipe \
  jshint-stylish \
  browser-sync \
  gulp \
  gulp-load-plugins \
  gulp-sequence \
  gulp-util \
  gulp-cached \
  gulp-jshint \
  gulp-lintspaces \
  --save-dev

touch gulpfile.js

bower init

touch .bowerrc

bower install \
  jquery \
  requirejs \
  mustache.js \
  --save
```


## Links

* [[GitHub] BrowserSync / browser-sync](https://github.com/browsersync/browser-sync) - Keep multiple browsers & devices in sync when building websites.

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp.

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins

* [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

* [[GitHub] wearefractal / gulp-cached](https://github.com/wearefractal/gulp-cached) - A simple in-memory file cache for gulp

* [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

  * [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

* [[GitHub] ck86 / gulp-lintspaces](https://github.com/ck86/gulp-lintspaces) - A Gulp plugin for lintspaces

* [[GitHub] teambition / gulp-sequence](https://github.com/teambition/gulp-sequence) - Run a series of gulp tasks in order

  * [[GitHub] teambition / gulp-sequence : ISSUE 2 - Error: thunk already filled on subsequent run](https://github.com/teambition/gulp-sequence/issues/2)


## License

- [MIT](LICENSE)
