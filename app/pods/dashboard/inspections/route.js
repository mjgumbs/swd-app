import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createInspection(){
      var inspection = this.store.createRecord('inspection');

      var self = this

      function transistionToInspection(){
        self.transitionTo('dashboard.inspection', inspection)
      }

      function failure(reason){
        console.log(reason);
      }

      inspection.save().then(transistionToInspection).catch(failure);

    }
  }
});
