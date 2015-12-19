import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr('string'),
  assessed: DS.attr('boolean'),
  inspectors: DS.hasMany('user'),
  establishment: DS.belongsTo('establishment')
});
