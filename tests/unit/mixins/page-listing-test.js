import Ember from 'ember';
import PageListingMixin from '../../../mixins/page-listing';
import { module, test } from 'qunit';

module('Unit | Mixin | page listing');

// Replace this with your real tests.
test('it works', function(assert) {
  let PageListingObject = Ember.Object.extend(PageListingMixin);
  let subject = PageListingObject.create();
  assert.ok(subject);
});
