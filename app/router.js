import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard',{path: '/'}, function(){
    this.route('inspections', {path: '/inspections'});
    this.route('inspection', {path: '/inspections/:inspection_number'}, function() {
      this.route('info');
      this.route('assessment');
      this.route('attachment');
    });
    this.route('establishment',{path: '/establishments/'});
    this.route('notfound', { path: '/*notfound' });
  });
  this.route('login');
});

export default Router;
