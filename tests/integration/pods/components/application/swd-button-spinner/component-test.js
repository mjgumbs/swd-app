import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application/swd-button-spinner', 'Integration | Component | application/swd button spinner', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{application/swd-button-spinner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#application/swd-button-spinner}}
      template block text
    {{/application/swd-button-spinner}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
