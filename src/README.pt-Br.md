# Passos Require.js ([en](README.md))

* [00](00) - sem require.js

> evite, péssima prática, tudo é global

```javascript
var att = 'some att value';

function logic() {
  return 'something';
}
```

* [01](01) - sem require.js, aplicação js com namespaces

> boa prática

```javascript
(function(global, undefind) {

  // namespace principal da aplicação
  var app = global.app = global.app || {};

  // privado

  var att = 'algum valor para o atributo';

  function logica() {
    return 'alguma coisa';
  }

  // público - namespace local
  app.localNamespace = {
    att: att,
    logica: logica
  };

})(window);
```

* [02](02) - estilo AMD

```javascript
// estilo AMD
define(['minhaDependencia'], function(minhaDependencia) {  
  // privado

  return {
    /* público */
  };
});
```

* [03](03) - estilo CommonJS

```javascript
// estilo CommonJS
define(function(require) {  
  var myDependency = require('minhaDependencia');

  // privado

  return {
    /* público */
  };
});
```
