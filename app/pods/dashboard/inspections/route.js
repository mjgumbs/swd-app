import Ember from 'ember';

export default Ember.Route.extend({
  ransack: null,
  queryParams: {
    page:{
      refreshModel: true
    },
    'per_page': {
      refreshModel: true
    },
    q:{
      refreshModel: true
    }

  },

  model(params){
    return this.store.query('inspection', params);
  },

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
    },

    loading(){
      let controller = this.controllerFor('dashboard.inspections');
      controller.set('isLoading', true);
    },
    didTransition(){
      let controller = this.controllerFor('dashboard.inspections');
      controller.set('isLoading', null);
    }
  }
});
