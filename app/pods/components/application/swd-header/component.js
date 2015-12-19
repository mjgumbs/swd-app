import Ember from 'ember';

import ClickOutise from 'swd-app/mixins/components/click-outside';
import layout from 'swd-app/pods/components/click-outside/template';
const { Component, on } = Ember;
const { next } = Ember.run;
const {service} = Ember.inject;

export default Ember.Component.extend(ClickOutise,{
  layout,

  authManager: service('auth-manager'),
  session:     service('session'),

  isHidden: true,

  clickOutside() {
    if(this.get('isHidden') === false){
      this.toggleProperty('isHidden');
    }

  },

  _attachClickOutsideHandler: on('didInsertElement', function() {
    next(this, this.addClickOutsideListener);
  }),

  _removeClickOutsideHandler: on('willDestroyElement', function() {
    this.removeClickOutsideListener();
  }),

  actions: {
    dropDown: function(){
      this.toggleProperty('isHidden');
    },
    logout: function(){
      this.sendAction('logout');
      this.toggleProperty('isHidden');
    }
  }
});
