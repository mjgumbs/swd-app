import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input-group'],
  _picker: null,

  dateChangedValue: function(){
    var picker = this.get('_picker');
    if(picker){
      picker.setDate(this.get('date'));
    }
  }.observes('date'),

  didInsertElement: function(){
    var currentYear = (new Date()).getFullYear();
    var element =  this.$()[0].childNodes[0];
    var picker = new window.Pikaday({
      field: element,
      yearRange: [currentYear-2,currentYear],
      firstDay:1,
      disableWeekends:true
    });
    this.set('_picker', picker);
  },

  willDestroyElement: function(){
    var picker = this.get('_picker');
    if (picker){
      picker.destroy();
    }
    this.set('_picker', null);
  }
});
