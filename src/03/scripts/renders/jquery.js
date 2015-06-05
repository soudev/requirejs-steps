define(['jquery'], function($) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  function append() {
    $('#jquery-render').append('append by jquery');
    console.log('jquery render append : done');
  }

  //----------------------------------------------------------------------------
  // public

  return append;

});
