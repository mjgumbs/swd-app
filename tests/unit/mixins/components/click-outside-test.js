import Ember from 'ember';
import ComponentsClickOutsideMixin from '../../../mixins/components/click-outside';
import { module, test } from 'qunit';

module('Unit | Mixin | components/click outside');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentsClickOutsideObject = Ember.Object.extend(ComponentsClickOutsideMixin);
  let subject = ComponentsClickOutsideObject.create();
  assert.ok(subject);
});
