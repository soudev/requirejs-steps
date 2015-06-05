define([
  './renders/jquery',
  './renders/vanilla',
  './to_jquery/run',
  './mustaches/menu',
  './mustaches/reset'
], function( renderJquery, renderVanilla, toJquery, menuRender, menuReset ) {

  //----------------------------------------------------------------------------
  // private

  function run() {

    //--------------------------------------------------------------------------
    // renders
    renderJquery();
    renderVanilla();

    //--------------------------------------------------------------------------
    // to_jquery
    toJquery();

    //--------------------------------------------------------------------------
    // mustache
    menuRender();
    menuReset();

  }

  //----------------------------------------------------------------------------
  // public

  return run;

});
