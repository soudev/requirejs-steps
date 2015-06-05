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
      'persons': [
        {
          name: 'Erko Bridee',
          github: 'https://github.com/erkobridee'
        },
        {
          name: 'Janderson F. Cardoso',
          github: 'https://github.com/jandersonfc'
        },
        {
          name: 'Mario Junior',
          github: 'https://github.com/mariojunior'
        }
      ]
    };

    var template = '<b>GitHub Profiles:</b><ul>{{#persons}}<li><a href="{{github}}" target="_blank">{{name}}</a></li>{{/persons}}</ul>';

    // dep ./compiler.js
    return app.mustache.compile( template, view );
  }

  //----------------------------------------------------------------------------
  // public

  app.menu.option.sample1 = render;

})(window);
