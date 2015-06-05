(function(global, $, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.render = app.render || {};

  //----------------------------------------------------------------------------
  // private

  function append() {
    $('#jquery-render').append('append by jquery');
    console.log('jquery render append : done');
  }

  //----------------------------------------------------------------------------
  // public

  app.render.jquery = append;

})(window, jQuery);
