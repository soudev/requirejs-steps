define(function(require) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  var $ = require('jquery');


  function reset() {
    console.log('reset mustache area');
    // $('#mustacheArea').empty();
    $('#mustacheArea').html( '<p style="text-align: center"><b>Mustache Output Area</b></p>' );
  }

  //----------------------------------------------------------------------------
  // public

  return reset;

});
