define(['jquery', './app'], function( $, runApp ) {
  'use strict';

  $(document).ready(function() {

    console.log('Application running...');

    runApp();

  });

});
