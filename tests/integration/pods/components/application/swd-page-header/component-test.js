import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application/swd-page-header', 'Integration | Component | application/swd page header', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{application/swd-page-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#application/swd-page-header}}
      template block text
    {{/application/swd-page-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
