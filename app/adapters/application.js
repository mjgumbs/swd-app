import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'swd-app/config/environment';


export default ActiveModelAdapter.extend(DataAdapterMixin,{
  host: config.APP.API_HOST,
  authorizer: 'authorizer:application'
});
