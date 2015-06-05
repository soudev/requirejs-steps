var gulp       = require('gulp'),
    $          = require('gulp-load-plugins')();

$.lazypipe     = require('lazypipe');
$.pkg          = require('./package.json');

$.browserSync  = require('browser-sync');
$.reload       = $.browserSync.reload;

// shared streams
$.streams = {};

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

$.streams.jshint = $.lazypipe()
  .pipe( $.cached, 'jshint' )
  .pipe( $.jshint )
  .pipe( $.jshint.reporter, 'jshint-stylish' )
  .pipe( $.jshint.reporter, 'fail' );

gulp.task('jshint:tools', function() {
  return gulp.src( $.config.tools.js )
    .pipe( $.streams.jshint() );
});

gulp.task('jshint:project', function() {
  return gulp.src( $.config.project.js )
    .pipe( $.streams.jshint() );
});

gulp.task('jshint', ['jshint:tools', 'jshint:project']);

//------------------------------------------------------------------------------

$.streams.lintspaces = $.lazypipe()
  .pipe( $.cached, 'lintspaces' )
  .pipe( $.lintspaces, { editorconfig: '.editorconfig' } )
  .pipe( $.lintspaces.reporter );


gulp.task('lintspaces:tools', function() {
  return gulp
    .src( $.config.tools.js )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:js', function() {
  return gulp
    .src( $.config.project.js )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:html', function() {
  return gulp
    .src( $.config.project.html )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project', ['lintspaces:project:js', 'lintspaces:project:html']);

gulp.task('lintspaces', ['lintspaces:tools', 'lintspaces:project']);

//------------------------------------------------------------------------------

gulp.task('validate', ['jshint', 'lintspaces']);

//------------------------------------------------------------------------------

gulp.task('webserver', function() {
  $.browserSync({
    port: $.config.webserver.port,
    server:{
      baseDir: $.config.webserver.root,
      middleware: $.config.webserver.middlewares
    }
  });
});

//------------------------------------------------------------------------------
/*
  [GitHub ISSUE 2] teambition / gulp-sequence
  Error: thunk already filled on subsequent run
  https://github.com/teambition/gulp-sequence/issues/2
*/

gulp.task('wf:bs:reload', function() {
  $.reload();
});

gulp.task('wf:project:html', function( done ) {
  $.sequence(
    'lintspaces:project:html',
    'wf:bs:reload'
  )(done);
});

gulp.task('wf:project:js', function( done ) {
  $.sequence(
    [
      'lintspaces:project:js',
      'jshint:project'
    ],
    'wf:bs:reload'
  )(done);
});

gulp.task('watch', ['webserver'], function() {

  gulp.watch($.config.project.js, ['wf:project:js']);

  gulp.watch($.config.project.html, ['wf:project:html']);

});

//------------------------------------------------------------------------------

gulp.task('workflow:default', $.sequence('validate', 'watch'));

gulp.task('default', ['workflow:default'], function() {
  $.projectInfoMsg();
});

// @end: tasks
//============================================================================//
