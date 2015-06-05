define(function(require) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  var render   = {
        jquery  : require('./renders/jquery'),
        vanilla : require('./renders/vanilla')
      },
      toJquery = require('./to_jquery/run'),
      menu     = require('./mustaches/menu');


  function run() {

    //--------------------------------------------------------------------------
    // renders
    render.jquery();
    render.vanilla();

    //--------------------------------------------------------------------------
    // to_jquery
    toJquery();

    //--------------------------------------------------------------------------
    // mustache
    menu.render();
    menu.reset();

  }

  //----------------------------------------------------------------------------
  // public

  return run;

});
