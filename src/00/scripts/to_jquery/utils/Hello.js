function Hello() {}

Hello.prototype.say = function( value ) {
  return 'Hello ' + ( value || 'World' );
};
