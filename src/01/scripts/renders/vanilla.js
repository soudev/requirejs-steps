(function(global, doc, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.render = app.render || {};

  //----------------------------------------------------------------------------
  // private

  function append() {
    var div = doc.getElementById('vanilla-render');
    div.innerHTML = 'append by vanilla javascript';
    console.log('vanilla render append : done');
  }

  //----------------------------------------------------------------------------
  // public

  app.render.vanilla = append;

})(window, document);
