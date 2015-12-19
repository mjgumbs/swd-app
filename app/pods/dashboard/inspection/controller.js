import Ember from 'ember';

export default Ember.Controller.extend({



  actions:{
    nextStep:function(){
      console.log(this.model.get('establishment'));
      this.model.save();
    }
  }
});
