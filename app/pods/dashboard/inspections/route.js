import Ember from 'ember';
import pageListingRouteMixin from 'swd-app/mixins/routes/page-listing';

export default Ember.Route.extend(pageListingRouteMixin, {
  model(params){
    return this.store.query('inspection', params);
  },

  controllerName: 'dashboard.inspections',

  actions: {
    createInspection(){
      var inspection = this.store.createRecord('inspection');

      var self = this;

      function transistionToInspection(){
        self.transitionTo('dashboard.inspection.info', inspection);
      }

      function failure(reason){
        console.log(reason);
      }

      inspection.save().then(transistionToInspection).catch(failure);
    }
  }
});
