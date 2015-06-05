(function(global, $, undefined) {
  'use strict';

  // namespaces
  var app = global.app = global.app || {};
  app.to_jquery = app.to_jquery || {};

  //----------------------------------------------------------------------------
  // private

  function run() {

    var p, ul, li;
    var htmlContent = $('<div/>');

    htmlContent.append( $('<p/>').append('Application Running...') );

    //-- Hello
    p = $('<p/>').append( 'say hello...' );
    htmlContent.append( p );
    ul = $('<ul/>');
    p.append( ul );

    var hello = new app.to_jquery.utils.Hello();

    ul.append( $('<li/>').append( hello.say() ) );
    ul.append( $('<li/>').append( hello.say(  'Erko Bridee'  ) ) );

    p = ul = li = null;

    //--- Sum

    p = $('<p/>').append( 'sum a + b' );
    htmlContent.append( p );
    ul = $('<ul/>');
    p.append( ul );

    var sum = new app.to_jquery.utils.Sum();

    ul.append( $('<li/>').append( sum.add( 1, 1) ) );
    ul.append( $('<li/>').append( sum.add( 101, 212) ) );

    p = ul = li = null;

    //---

    $('#to_jquery').append( htmlContent );

  }

  //----------------------------------------------------------------------------
  // public

  app.to_jquery.run = run;

})(window, jQuery);
