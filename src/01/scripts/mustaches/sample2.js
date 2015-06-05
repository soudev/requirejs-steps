(function(global, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.menu = app.menu || {};
  app.menu.option = app.menu.option || {};

  //----------------------------------------------------------------------------
  // private

  function render() {

    var view = {
      name: 'soudev',
      github: 'https://github.com/soudev'
    };

    var template = $('#githubOrgTpl').html();
    Mustache.parse(template);   // optional, speeds up future uses

    // dep ./compiler.js
    return app.mustache.compile( template, view );
  }

  //----------------------------------------------------------------------------
  // public

  app.menu.option.sample2 = render;

})(window);
