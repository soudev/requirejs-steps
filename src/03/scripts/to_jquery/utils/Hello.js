define(function(require) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  function Hello() {}

  Hello.prototype.say = function( value ) {
    return 'Hello ' + ( value || 'World' );
  };

  //----------------------------------------------------------------------------
  // public

  return Hello;

});
