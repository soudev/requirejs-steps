# Passos Require.js ([en](README.md))

* [00](00) - sem require.js

> evite, péssima prática, tudo é global
>
> Com o crescimento da aplicação, existe grande chances de que os nomes de atributos
> e/ou funções sejam os mesmo, assim ocorrendo colisão, algo que é difícil de
> rastrear e corrigir

```javascript
var att = 'some att value';

function logic() {
  return 'something';
}
```


* [01](01) - sem require.js, aplicação js com namespaces

> boa prática, nada é diretamente global
>
> É definido um namescape para a aplicação e a partir daí,
> cada funcionalidade estará disposta/associada em seu respectivo
> namespace (é o conceito de pacotes)

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

> estilo de código do require.js
>
> Consiste em organizar a aplicação em módulos, onde o código js
> dentro do `define` é privado, o array indica as dependências 
> do respectivo módulo, que são injetados como parâmetros na `function`
> e a exposição de funcionalidades/valores é determinado pelo
> que é retornado dessa função `return`, que por sua vez pode 
> ser utilizado em outro módulo, sendo injetado como sua dependência

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

> estilo de código adotado diretamente pelo Node.js
>
> Assim como o estilo AMD, segue as mesmas regras, porém 
> para melhorar a legibilidade de código, ao invés de ter um 
> array com as dependências, é feito o acesso conforme o necessário
> das dependências que serão utilizadas dentro do módulo.
>
> Esta sintaxe também possui a vantagem de ser mais fácil
> para efetuar a futura migração para o ECMAScript 6.

```javascript
// estilo CommonJS
define(function(require) {  
  
  // privado

  var myDependency = require('minhaDependencia');


  return {
    /* público */
  };
});
```
