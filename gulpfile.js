var gulp       = require('gulp'),
    $          = require('gulp-load-plugins')();

    $.open     = require('open');
    $.lazypipe = require('lazypipe');
    $.pkg      = require('./package.json');

//============================================================================//
// @begin: configs
(function() {

var paths = {
  project: 'src',
  bower: 'bower_components'
};

$.config = {

  webserver: {
    root: [paths.project, paths.bower],
    port: 1337
  },

  tools: {
    js: ['gulpfile.js']
  },

  project: {

    js: [
      paths.project + '/**/*.js'
    ],

    html: [
      paths.project + '/**/*.html'
    ]

  }

};

})();
// @end: configs
//============================================================================//
// @begin: utils

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

$.onError = function(err) {
  $.log(err);
};

//---

$.projectInfoMsg = function() {
  $.log('');
  $.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
  $.log('description: ' + $.pkg.description);
  $.log('');
};

// @end: utils
//============================================================================//
// @begin: tasks

// TODO: define jshint

//------------------------------------------------------------------------------

// TODO: define lintspaces

//------------------------------------------------------------------------------

gulp.task('connect', function() {
  $.connect.server({
    root: $.config.webserver.root,
    port: $.config.webserver.port
  });
  $.open('http://localhost:' + $.config.webserver.port);
})

//------------------------------------------------------------------------------

gulp.task('watch', ['connect'], function() {
  $.log('TODO: define');
});

//------------------------------------------------------------------------------

gulp.task('default', ['watch'], function() {
  $.projectInfoMsg();
});

// @end: tasks
//============================================================================//