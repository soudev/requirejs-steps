
console.log( 'hello world' );
console.log( 'Application Running...' );

//------------------------------------------------------------------------------
// @begin: renders

jqueryAppend();
vanillaAppend();

// @end: renders
//------------------------------------------------------------------------------
// @begin: to_jquery

var p, ul, li;
var htmlContent = $('<div/>');

htmlContent.append( $('<p/>').append('Application Running...') );

//-- Hello
p = $('<p/>').append( 'say hello...' );
htmlContent.append( p );
ul = $('<ul/>');
p.append( ul );

var hello = new Hello();

ul.append( $('<li/>').append( hello.say() ) );
ul.append( $('<li/>').append( hello.say(  'Erko Bridee'  ) ) );

p = ul = li = null;

//--- Sum

p = $('<p/>').append( 'sum a + b' );
htmlContent.append( p );
ul = $('<ul/>');
p.append( ul );

var sum = new Sum();

ul.append( $('<li/>').append( sum.add( 1, 1) ) );
ul.append( $('<li/>').append( sum.add( 101, 212) ) );

p = ul = li = null;

//---

$('#to_jquery').append( htmlContent );

// @end: to_jquery
//------------------------------------------------------------------------------
// @begin: mustache

menu(); // render menu
reset();

function menuClick(option) {

  console.log('menu click option: ' + option);

  if(option === 0) {
    return reset();
  }

  var fnName = 'sample' + option,
      fn = window[fnName],
      html = fn();

  $('#mustacheArea').html( html );

}

// @begin: mustache
//------------------------------------------------------------------------------
