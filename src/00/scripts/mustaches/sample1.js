function sample1() {

  var view = {
    'persons': [
      {
        name: 'Erko Bridee',
        github: 'https://github.com/erkobridee'
      },
      {
        name: 'Janderson F. Cardoso',
        github: 'https://github.com/jandersonfc'
      },
      {
        name: 'Mario Junior',
        github: 'https://github.com/mariojunior'
      }
    ]
  };

  var template = '<b>GitHub Profiles:</b><ul>{{#persons}}<li><a href="{{github}}" target="_blank">{{name}}</a></li>{{/persons}}</ul>';

  // dep ./compiler.js
  return compile( template, view );
}
