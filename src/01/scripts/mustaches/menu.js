(function(global, $, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.menu = app.menu || {};

  //----------------------------------------------------------------------------
  // private

  function render() {

    var view = {
      'menu': [
        {option: 0, label: 'Reset'},
        {option: 1, label: 'Basic example'},
        {option: 2, label: 'Externalized Template'},
      ]
    };

    var template = '<ul>{{#menu}}<li><a href="javascript:app.menu.click({{option}})">Sample {{option}}: {{label}}</a></li>{{/menu}}</ul>';

    // dep ./compiler.js
    $('#mustacheMenu').html( app.mustache.compile( template, view ) );

  }


  function click(option) {

    console.log('menu click option: ' + option);

    if(option === 0) {
      return app.menu.option.reset();
    }

    var fnName = 'sample' + option,
        fn = app.menu.option[fnName],
        html = fn();

    $('#mustacheArea').html( html );

  }

  //----------------------------------------------------------------------------
  // public

  app.menu.render = render;
  app.menu.click  = click;

})(window, jQuery);
