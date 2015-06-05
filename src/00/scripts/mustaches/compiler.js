/*
  [GitHub] janl/mustache.js - Minimal templating with {{mustaches}} in JavaScript
  https://github.com/janl/mustache.js
*/
function compile( template, view, partials ) {
  return Mustache.render(template, view, partials);
}
