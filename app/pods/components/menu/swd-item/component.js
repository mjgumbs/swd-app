import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: true,
  actions:{
    toggleSubMenu: function(){
      this.toggleProperty('isHidden');
    }
  }
});
