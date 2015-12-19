import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  primaryKey: 'number',
  attrs: {
    inspectors: {
      embedded: 'always',
      serialize: 'ids'
    },
    establishment: {
      embedded: 'always',
      serialize: 'id'
    }
  }
});
