import Ember from 'ember';

import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin,{



actions: {
  authenticate: function(identification, password){
    const flashMessages = Ember.get(this, 'flashMessages');

    return this.get('session').authenticate('authenticator:devise', identification, password)
      .then(() =>{
        this.transitionTo('dashboard.inspections');
        flashMessages.success('Successfully logged in',{
          timeout: 3000
        });
      })
      .catch((reason) => {
        flashMessages.danger(reason.error,{
          timeout: 2000
        });
      });
  }
}
});
