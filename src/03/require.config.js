require({

  // libraries dependencies (fallback support)
  paths: {

    jquery: '/vendor/jquery/dist/jquery.min',
    mustache: '/vendor/mustache.js/mustache.min'

  },

  // define js scripts dependencies
  //http://www.requirejs.org/docs/api.html#config-shim
  shim: {},

  deps: ['./scripts/run']

});
