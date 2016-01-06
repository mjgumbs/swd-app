import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  actions:{
    error(error, transition) {
      alert(1);
      const flashMessages = Ember.get(this, 'flashMessages');
      if (error.errors[0].status === 401) {
        var params = transition.params['dashboard.inspection'].inspection_number;
        this.transitionTo('login');
        const message = Ember.String.htmlSafe(`Inspection with identifier <strong>${params}</strong> does not exist.`);
        flashMessages.clearMessages();
        flashMessages.success(message,{
          timeout: 10000
        });
      }
    }
  }

});
