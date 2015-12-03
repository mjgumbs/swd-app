import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inspection-sub-menu', 'Integration | Component | inspection sub menu', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{inspection-sub-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#inspection-sub-menu}}
      template block text
    {{/inspection-sub-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
