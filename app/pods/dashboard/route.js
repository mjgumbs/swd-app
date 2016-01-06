import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

import config from 'swd-app/config/environment';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  authManager: service('auth-manager'),

  beforeModel(){
    this._super(...arguments);
    return this._loadCurrentUser();
  },

  afterModel(){
    this._super(...arguments);
    const currentRoute = this.controllerFor('dashboard').get('currentUrl');
    if(currentRoute === config.APP.HOST){
      this.transitionTo('dashboard.inspections');
    }
  },

  sessionAuthenticated(){
    this._super(...arguments);
    this._loadCurrentUser()
      .catch(() => {
        console.log(1);
        this.get('session').invalidate();
        this.transitionTo('login');
      });
  },

  _loadCurrentUser(){
    return this.get('authManager').loadCurrentUser();
  },

  actions: {
    logout: function(){
      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
