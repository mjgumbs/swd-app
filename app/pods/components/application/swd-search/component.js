import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['filter-wrap row'],
  classNameBindings:['collapsed'],
  collapsed: false,
  actions:{
    toggleFilter(){
      this.toggleProperty('collapsed');
    },

    quickSearch(){
      this.get('quickSearch')(this.get('term'));
    }
  }
});
