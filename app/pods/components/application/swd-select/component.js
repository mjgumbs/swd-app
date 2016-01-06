import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement(){
    var element = this.$()[0].childNodes[0];
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$(element).selectize({
        delimiter: ',',
        persist: false,
        create: function(input) {
            return {
                value: input,
                text: input
            };
        }
      });
    });
  }
});
