import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition){
    if (model.get('state') === 'pending'){
      this.transitionTo('dashboard.inspection.info', model);
    }
  }
});
