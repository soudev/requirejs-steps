define(function(require) {
  'use strict';

  var $   = require('jquery'),
      app = require('./app');


  $(document).ready(function() {

    console.log('Application running...');

    app();

  });

});
