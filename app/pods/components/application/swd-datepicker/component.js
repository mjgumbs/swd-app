import Ember from 'ember';
import moment from 'moment';

export default Ember.TextField.extend({
  classNames: ['datepicker datepicker-from form-control'],
  _picker: null,
  maxDate: new Date(),
  minDate: null,

  onSelect: function(){
    let picker = this.get('_picker');
    if(picker){
      this.get('setDate')(picker.getDate());
    }
  },

  dateNullOberserver: Ember.observer('date', function(){
    let picker = this.get('_picker');
    if(picker && this.get('date') === null){
      picker.setDate(null);
    }
  }),

  setMinMax(){
    var picker = this.get('_picker');
    if(picker){
      if(! Ember.isBlank(this.get('minDate'))){
        picker.setMinDate(this.get('minDate'));
      }
    }

  },

  didInsertElement: function(){
    var currentYear = (new Date()).getFullYear();
    var element =  this.$()[0];
    var picker = new window.Pikaday({
      field: element,
      format:'dddd, MMMM Do YYYY',
      yearRange: [currentYear-2,currentYear],
      maxDate: new Date(this.get('maxDate')),
      firstDay:1,
      disableWeekends:true,
      onSelect: this.get('onSelect').bind(this),
      onOpen: this.get('setMinMax').bind(this)
    });
    this.set('_picker', picker);
    Ember.run.scheduleOnce('afterRender',this, function() {
      this.get('_picker').setDate(this.get('date'));
    });

  },

  willDestroyElement: function(){
    var picker = this.get('_picker');
    if (picker){
      picker.destroy();
    }
    this.set('_picker', null);
  }
});
