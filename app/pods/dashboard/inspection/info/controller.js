import Ember from 'ember';

export default Ember.Controller.extend({
  inspectionController: Ember.inject.controller('dashboard.inspection'),
  inspection: Ember.computed.reads('inspectionController.model'),

  establishmentPresent: Ember.computed('inspection.establishment', function(){
    return this.get('inspection.establishment.content') !== null ;
  }),

  inspectorsPresent: Ember.computed('inspection.inspectors', function(){
    return this.get('inspection.inspectors.length') > 0;
  }),

  scopePresent: Ember.computed('inspection.scope', function(){
    return this.get('inspection.scope.content') !== null;
  }),

  isInValid: Ember.computed('establishmentPresent','inspectorsPresent', 'scopePresent', function(){
    return this.get('establishmentPresent') && this.get('inspectorsPresent') && this.get('scopePresent') ? null : true;
  }),

  isLoading: false,

  actions:{
    // Establishment Actions
    searchEstablishment: function(term){
      if(term.length < 3){return [];}
      var establishment = this.store.query('establishment',
        {
          q:{
            trade_name_cont: term
          }
        }
      );
      return establishment;
    },

    selectEstablishment: function(establishment){
      var inspection = this.get('inspection');
      inspection.set('establishment', establishment);
    },

    // Inspection Date action

    setInspectionDate: function(date){
      var inspection = this.get('inspection');
      inspection.set('inspectedAt', new Date(date));
    },

    // Inspector Actions
    searchInspectors: function(term){
      if(term.length < 3){return [];}
      var inspectors = this.store.query('user',
        {
          q: {
            m:'or',
            first_name_start: term,
            last_name_start: term,
            email_cont: term
          }
        }
      );
      return inspectors;
    },

    selectInspectors: function(inspectors){
      var inspection = this.get('inspection');
      inspection.set('inspectors', []);
      inspectors.forEach((inspector) => {
        inspection.get('inspectors').pushObject(inspector);
      });
    },

    // Scope Actions
    searchScope: function(term){
      if(term.length < 3){return [];}
      var scope = this.store.query('inspection-scope',
        {
          q: {
            name_cont: term
          }
        }
      );
      return scope;
    },

    selectScope: function(scope){
      var inspection = this.get('inspection');
      inspection.set('scope', scope);
    },

    // Next step
    save: function(){
      this.set('isLoading', true)
      this.model.save().then(() =>{
        this.set('isLoading', false);
        this.send('nextStep', 'dashboard.inspection');
      });
    }
  }
});
