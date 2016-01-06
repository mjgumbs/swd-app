import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin,{
  primaryKey: 'number',
  attrs: {
    inspectors: {
      embedded: 'always',
      serialize: 'ids'
    },
    establishment: {
      embedded: 'always',
      serialize: 'id'
    },
    scope:{
      embedded: 'always',
      serialize: 'id'
    }
  }
});
