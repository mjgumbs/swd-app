import Ember from 'ember';

export default Ember.Controller.extend({
  canGoToAssessment: Ember.computed('model.state', function(){
    return this.model.get('state') === 'pending' ? true : null;
  }),

  canGoToAttachment: Ember.computed('model.state', function(){
    return this.model.get('state') !== 'assessed' ? true : null;
  }),

});
