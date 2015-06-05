define(['jquery', 'mustache', './compiler'], function( $, Mustache, compile ) {
  'use strict';

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
    return compile( template, view );
  }

  //----------------------------------------------------------------------------
  // public

  return render;

});
