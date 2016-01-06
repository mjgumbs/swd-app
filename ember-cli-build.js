/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
      sassOptions: {
        includePaths:[
          'bower_components/bootstrap-sass/assets/stylesheets',
          'bower_components/pikaday/scss',
          'bower_components/SpinKit/scss'
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
  app.import('bower_components/ladda-bootstrap/dist/ladda-themeless.css');
  app.import('bower_components/ladda-bootstrap/dist/spin.js');
  app.import('bower_components/ladda-bootstrap/dist/ladda.js');
  return app.toTree();
};
