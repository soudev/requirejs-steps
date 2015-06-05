(function(global, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.to_jquery = app.to_jquery || {};
  app.to_jquery.utils = app.to_jquery.utils || {};

  //----------------------------------------------------------------------------
  // private

  function Hello() {}

  Hello.prototype.say = function( value ) {
    return 'Hello ' + ( value || 'World' );
  };

  //----------------------------------------------------------------------------
  // public

  app.to_jquery.utils.Hello = Hello;

})(window);
