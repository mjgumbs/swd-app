import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  metaData: {},
  classNames: ['pagination', 'pagination-sm'],
  paginateLimit: 5,
  disableNextLink: Ember.computed('metaData', function(){
    if(Object.keys(this.get('metaData')).length !== 0){
      let {page, total_page} = this.get('metaData');
      return page === total_page;
    }

  }),

  disablePrevLink: Ember.computed('metaData', function(){
    if(Object.keys(this.get('metaData')).length !== 0){
      let {page} = this.get('metaData');
      return page === 1 ;
    }

  }),

  pageNumbers: Ember.computed('metaData', function(){
    if(Object.keys(this.get('metaData')).length !== 0){
      let {total_page, page} = this.get('metaData');
      let paginate_limit = this.get('paginateLimit');
      let dotshow = true;
      let array = new Array();
      for (var i = 1; i<= total_page; i++){
        if(i === 1 || i === total_page || (i >= page - paginate_limit
        && i <= page + paginate_limit))
        {
          dotshow = true;
          array[i] = {number: i, text: i};
        }else if(dotshow === true){
          dotshow = false;
          array[i] = {number: i, text: '...'};
        }
      }
      return array;
    }
  }),

  displayPageNumbers: Ember.computed('pageNumbers', function(){
    if(this.get('pageNumbers')){
      return this.get('pageNumbers').length > 2;
    }
  }),

  actions: {
    nextPage: function(){
      let {page} = this.get('metaData');
      if(! this.get('disableNextLink')){
        this.get('goToPage')(page + 1);
      }
    },

    prevPage: function(){
      let {page} = this.get('metaData');
      if(! this.get('disablePrevLink')){
        this.get('goToPage')(page - 1);
      }
    },

    goToPage: function(page){
      this.get('goToPage')(page);
    }
  }

});
