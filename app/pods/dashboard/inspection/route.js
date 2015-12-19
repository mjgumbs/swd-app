import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.find('inspection', params.inspection_number);
  },

  afterModel(model){
    switch (model.get('state')) {
      case 'pending':
        this.transitionTo('dashboard.inspection.info', model);
        break;
      case 'assessed':
        this.transitionTo('dashboard.inspection.assessment', model);
        break;
      default:

    }

  },

  serialize: function(model, params){
    return {inspection_number: model.get('id')};
  },

  actions: {
    error(error, transition) {
      var errors = error.errors;
      const flashMessages = Ember.get(this, 'flashMessages');
      if (error.errors[0].status === 404) {
        var params = transition.params['dashboard.inspection'].inspection_number;
        this.transitionTo('dashboard.inspections');
        const message = Ember.String.htmlSafe(`Inspection with identifier <strong>${params}</strong> does not exist.`)
        flashMessages.clearMessages();
        flashMessages.success(message,{
          timeout: 10000
        });
      }
    }
  }
});
