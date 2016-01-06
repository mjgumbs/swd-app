import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'page',
    'per_page',
    'q'
  ],
  isLoading: null,

  searchCollapsed: Ember.computed('q.[]', function(){
    return ! Ember.isEmpty(this.get('q'));
  }),
  page: 1,
  'per_page': null,
  perPageOptions: Ember.String.w('15 30 45 60'),
  q: [],

  startDate: Ember.computed('q',function(){
    return this.get('q')['inspected_at_gteq'];
  }),

  endDate: Ember.computed('q', function(){
    return this.get('q')['inspected_at_lteq'];
  }),

  metaData: Ember.computed('model', function(){
    let metadata = this.model.get('meta');
    return Ember.get(metadata, 'pagination');
  }),

  scope: Ember.computed('q', function(){
    let id = this.get('q')['scope_id_in'];
    if(id === undefined) {return null;}
    return this.store.findRecord('inspection_scope', id);
  }),

  actions: {
    setStartDate(date){
      this.set('startDate', date);
    },

    setEndDate(date){
      this.set('endDate', date);
    },

    searchInspection(){
      this.set('q', []);
      let q = this.get('q');
      q.pushObject({inspected_at_gteq: this.get('startDate')});
      q.pushObject({inspected_at_lteq: this.get('endDate')});
      if(this.get('scope')) {q.pushObject({scope_id_in: this.get('scope').id});}
      q = q.reduce(function(map, obj){
        let key = Object.keys(obj)[0];
        map[key] = obj[key];
        return map;
      },{});
      this.set('q', q);
    },

    clearSearch(){
      this.set('q', []);
      this.set('endDate', null);
      this.set('startDate', null);
      this.set('scope', null);
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
