import Ember from 'ember';
import _ from 'lodash';


export default Ember.Mixin.create({
  queryParams: [
    'page',
    'per_page',
    'q'
  ],
  isLoading: null,
  searchOptions: [],

  searchCollapsed: Ember.computed('q.[]', function(){
    let q = this.get('q');
    let callapsed = false;
    if(! Ember.isEmpty(q)){
      let options = this.get('searchOptions').filter(function(o){
        return o.prop !== 'id';
      });
      Object.keys(q).some(function(key){
        for(let i = 0; i < options.length; i++){
          if(options[i]['criteria'] === key){
            callapsed = true;
            break;
          }
        }
      });
      return callapsed;
    }
    return callapsed;
  }),
  page: 1,
  sortDirection: Ember.computed("q.['s']", function(){
    let q = this.get('q');
    if(! Ember.isEmpty(q)){
      let s = q['s'];
      if(! Ember.isBlank(s)){
        return s.split(" ")[1];
      }
    }
    return 'desc';
  }),

  invalidPageObserver: Ember.observer('model', function(){
    let metadata = this.model.get('meta');
    if(Object.keys(metadata).length === 0){
       Ember.run.schedule('actions', this, function(){
         this.set('page', 1);
       });
    }
  }),
  'per_page': null,
  perPageOptions: Ember.String.w('15 30 45 60'),
  q: [],

  metaData: Ember.computed('model', function(){
    if(Ember.isEmpty(this.model)){
      return {};
    }else{
      let metadata = this.model.get('meta');
      let pagination = Ember.get(metadata, 'pagination');
      if(pagination !== undefined){
        return pagination;
      }
      return {};
    }
  }),

  actions: {
    search(cb){
      let searchOptions = this.get('searchOptions');
      let q = [];
      if(! Ember.isEmpty(searchOptions)){
        searchOptions.forEach( (option) =>{
          let propValue = Ember.get(this, option['prop']);
          if(! Ember.isBlank(propValue)){
            let obj = {};
            Object.defineProperty(obj, option['criteria'],{
              value: function(){
                if(Ember.typeOf(propValue) === 'instance'){
                  return propValue.id;
                }else{
                  return propValue;
                }
              }(),
              enumerable: true
            });
            q.pushObject(obj);
          }
        });

        if(cb !== undefined){
          cb(q);
        }
        this.set('page', 1);
        this.set('q', _.transform(q, _.ary(_.extend, 2),  {}));
      }
    },

    quickSearch(id){
      this.set('id', id);
      this.send('search');
    },

    clearSearch(){
      this.set('q', []);
    },

    goToPage: function(page){
      this.set('page', page);
    },

    selectPerPage(option){
      this.set('per_page', option);
      this.set('page', 1);
    },

    sort(sort){
      this.send('search', (q) =>{
        if(this.get('sortDirection') === 'desc'){
          this.set('sortDirection', 'asc');
          q.pushObject({s:`${sort} asc`});
        }else{
          this.set('sortDirection', 'desc');
          q.pushObject({s:`${sort} desc`});
        }
      });
    },
  }

});
