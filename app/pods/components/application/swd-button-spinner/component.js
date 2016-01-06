import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn btn-success ladda-button',
  href: '#',
  _spinner: null,
  disabled: null,
  attributeBindings: ['data-style','data-loading','disabled'],
  isLoading: Ember.observer('loading', function(){
    this.get('_spinner').toggle();
  }),

  click(){
    this.get('action')();
  },

  didInsertElement(){
    var spinner = window.Ladda.create(this.$()[0]);
    this.set('_spinner', spinner);
  },

  willDestroyElement(){
    this.set('_spinner', null);
  }
});
