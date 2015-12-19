import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application/swd-datepicker', 'Integration | Component | application/swd datepicker', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{application/swd-datepicker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#application/swd-datepicker}}
      template block text
    {{/application/swd-datepicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
