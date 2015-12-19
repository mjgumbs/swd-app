import ActiveModelAdapter from 'active-model-adapter';
import config from 'swd-app/config/environment';


export default ActiveModelAdapter.extend({
  buildURL: function(type, id, snapshot){
    return `${this.host}`
  }
})
