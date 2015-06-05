define([], function() {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  function Sum() {}

  Sum.prototype.add = function(a, b) {
    return a + b;
  };

  //----------------------------------------------------------------------------
  // public

  return Sum;

});
