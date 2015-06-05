(function(global, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.to_jquery = app.to_jquery || {};
  app.to_jquery.utils = app.to_jquery.utils || {};

  //----------------------------------------------------------------------------
  // private

  function Sum() {}

  Sum.prototype.add = function(a, b) {
    return a + b;
  };

  //----------------------------------------------------------------------------
  // public

  app.to_jquery.utils.Sum = Sum;

})(window);
