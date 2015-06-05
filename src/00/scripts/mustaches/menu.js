function menu() {

  var view = {
    'menu': [
      {option: 0, label: 'Reset'},
      {option: 1, label: 'Basic example'},
      {option: 2, label: 'Externalized Template'},
    ]
  };

  var template = '<ul>{{#menu}}<li><a href="javascript:menuClick({{option}})">Sample {{option}}: {{label}}</a></li>{{/menu}}</ul>';

  // dep ./compiler.js
  $('#mustacheMenu').html( compile( template, view ) );

}
