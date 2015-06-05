# Require.js Steps ([pt-Br](README.pt-Br.md))

* [00](00) - without require.js

> avoid, bad practice, everything is global

```javascript
var att = 'some att value';

function logic() {
  return 'something';
}
```

* [01](01) - without require.js, js app with namespaces

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

* [02](02) - AMD Style

```javascript
// AMD Style
define(['myDependency'], function(myDependency) {  
  // private

  return {
    /* public */
  };
});
```

* [03](03) - CommonJS Style

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
