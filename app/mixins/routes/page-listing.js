import Ember from 'ember';
import _ from 'lodash';

export default Ember.Mixin.create({
  queryParams: {
    page:{
      refreshModel: true
    },
    'per_page': {
      refreshModel: true
    },
    q:{
      refreshModel: true
    }

  },

  afterModel(records, transition){
    let queryParams =  transition.queryParams;
    let controller = this.controllerFor(this.get('controllerName'));
    if(! Ember.isBlank(queryParams['q'])){
      let q = JSON.parse(queryParams['q']);
      controller.get('searchOptions').forEach((option) =>{
        let value = q[option['criteria']];

        if(! Ember.isBlank(value)){
          if(Ember.isBlank(option['model'])){
            controller.set(option['prop'], value);
          }else{
            this.store.findRecord(option['model'], value).then(function(record){
              controller.set(option['prop'], record);
            });
          }
        }
      });
    }else{
      controller.get('searchOptions').forEach(function(option){
        controller.set(option['prop'], null);
      });
    }
  },

  actions: {
    loading(){
      let controller = this.controllerFor(this.get('controllerName'));
      controller.set('isLoading', true);
    },

    didTransition(){
      let controller = this.controllerFor(this.get('controllerName'));
      controller.set('isLoading', null);
    }
  }
})
