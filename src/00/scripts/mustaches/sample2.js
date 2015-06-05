function sample2() {

  var view = {
    name: 'soudev',
    github: 'https://github.com/soudev'
  };

  var template = $('#githubOrgTpl').html();
  Mustache.parse(template);   // optional, speeds up future uses

  // dep ./compiler.js
  return compile( template, view );
}
