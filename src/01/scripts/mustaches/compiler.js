(function(global, Mustache, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.mustache = app.mustache || {};

  //----------------------------------------------------------------------------
  // private

  /*
    [GitHub] janl/mustache.js - Minimal templating with {{mustaches}} in JavaScript
    https://github.com/janl/mustache.js
  */
  function compile( template, view, partials ) {
    return Mustache.render(template, view, partials);
  }

  //----------------------------------------------------------------------------
  // public

  app.mustache.compile = compile;

})(window, Mustache);
