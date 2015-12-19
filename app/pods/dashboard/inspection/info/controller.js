import Ember from 'ember';

export default Ember.Controller.extend({
  inspectionController: Ember.inject.controller('dashboard.inspection'),
  inspection: Ember.computed.reads('inspectionController.model'),
  establishment: Ember.computed.reads('inspection.establishment'),
  inspectors: Ember.computed.reads('inspection.inspectors'),

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
      this.set('establishment', establishment);
      return establishment;
    },

    selectEstablishment: function(establishment){
      this.set('establishment', establishment);
      this.get('inspection').set('establishment', establishment);
    },

    // Inspector Actions
    searchInspectors: function(term){
      if(term.length < 3){return [];}
      var inspectors = this.store.query('user',
        {
          q: term,
          object: `inspection/${this.get('inspection').id}`,
          related: 'inspectors'
        }
      );
      return inspectors;
    },

    selectInspectors: function(inspectors){
      var inspection = this.get('inspection');
      inspection.set('inspectors', []);
      inspectors.forEach((inspector) => {
        inspection.get('inspectors').pushObject(inspector);
      })
      this.set('inspectors', inspectors);
    },

    // Scope Actions
    searchScope: function(term){
      if(term.length < 3){return [];}
      var scope = this.store.query('inspection/scope',
        {
          q: {
            name_cont: term
          }
        }
      );
      return scope;
    },

    selectScope: function(scope){
      this.set('scope', scope);
      this.get('inspection').set('inspection/scope', scope);
    }
  }
});
