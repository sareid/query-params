import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  // model: function(){
  //   return this.store.findAll('person');
  // }

  model: function(params){
    return this.store.query('person', params);
  }


});
