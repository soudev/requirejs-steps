define(['jquery'], function($) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  function append() {
    var div = document.getElementById('vanilla-render');
    div.innerHTML = 'append by vanilla javascript';
    console.log('vanilla render append : done');
  }

  //----------------------------------------------------------------------------
  // public

  return append;

});
