import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  actions: {
    authenticate: function(){
      let { identification, password } = this.getProperties('identification', 'password');
      this.sendAction('authenticate', identification, password);
    }
  },
  buttonDisabled: Ember.computed('flashMessages.isEmpty',function(){
    return ! this.get('flashMessages.isEmpty');
  })
});
