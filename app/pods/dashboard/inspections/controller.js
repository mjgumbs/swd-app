import Ember from 'ember';
import pageListControllerMixin from 'swd-app/mixins/controllers/page-listing';

export default Ember.Controller.extend(pageListControllerMixin,{
  searchOptions: [
    {criteria: 'inspected_at_gteq', prop: 'startDate', model: null},
    {criteria: 'inspected_at_lteq', prop: 'endDate', model: null},
    {criteria: 'scope_id_in',       prop: 'scope', model: 'inspection-scope'},
    {criteria: 'number_cont',       prop: 'id', model: null}
  ],

  actions: {
    setStartDate(date){
      this.set('startDate', date);
    },

    setEndDate(date){
      this.set('endDate', date);
    },

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
      this.set('scope', scope);
    },

  }
});
