(function(global, $, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.menu = app.menu || {};
  app.menu.option = app.menu.option || {};

  //----------------------------------------------------------------------------
  // private

  function reset() {
    console.log('reset mustache area');
    // $('#mustacheArea').empty();
    $('#mustacheArea').html( '<p style="text-align: center"><b>Mustache Output Area</b></p>' );
  }

  //----------------------------------------------------------------------------
  // public

  app.menu.option.reset = reset;

})(window, jQuery);
