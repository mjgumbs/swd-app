import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  currentUrl: window.location.href,
});
