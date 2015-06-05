define([
  'jquery',
  './compiler',
  './reset',
  './sample1',
  './sample2'
], function( $, compile, reset, sample1, sample2 ) {
  'use strict';

  //----------------------------------------------------------------------------
  // private

  var options = {
    sample1: sample1,
    sample2: sample2
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
      return reset();
    }

    var fnName = 'sample' + option,
        fn = options[fnName],
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

  return render;

});
