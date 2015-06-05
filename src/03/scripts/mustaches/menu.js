define(function(require) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  var $       = require('jquery'),
      compile = require('./compiler'),
      menu    = {
        reset   : require('./reset'),
        options : {
          sample1 : require('./sample1'),
          sample2 : require('./sample2')
        }
      };


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
    $('#mustacheMenu').html( compile( template, view ) );

  }


  function click(option) {

    console.log('menu click option: ' + option);

    if(option === 0) {
      return menu.reset();
    }

    var fnName = 'sample' + option,
        fn = menu.options[fnName],
        html = fn();

    $('#mustacheArea').html( html );

  }

  //----------------------------------------------------------------------------
  // public

    // global public
  var app = window.app = window.app || {};
  app.menu = {
    click: click
  };

  return {
    render : render,
    reset  : menu.reset
  };

});
