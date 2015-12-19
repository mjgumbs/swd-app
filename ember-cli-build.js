/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
      sassOptions: {
        includePaths:[
          'bower_components/bootstrap-sass/assets/stylesheets',
          'bower_components/pikaday/scss'
          ]
      }
  });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff',{
    destDir: 'fonts/bootstrap'
  });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2',{
    destDir: 'fonts/bootstrap'
  });
  app.import('bower_components/pikaday/pikaday.js');
  return app.toTree();
};
