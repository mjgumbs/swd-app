import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    nextStep(){
      this.transitionTo('dashboard.inspection.assessment');
    }
  }
});
