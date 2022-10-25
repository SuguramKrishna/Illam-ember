import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'illam-ember/tests/helpers';

module('Acceptance | illam ember', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.main-heading').hasText('BUY, SELL, AND RENT');
    assert.dom('.sub-heading').hasText('Are you looking for a property or you want to sell your property ? We are there !');
    assert.dom('.button-div .button').hasText('See Properties');
    await click('.button-div .button');

    assert.strictEqual(currentURL(), '/list');
  });

  test('visiting /about', async function (assert){
    await visit('/about')
    assert.strictEqual(currentURL(), '/about');
    assert.dom('.page-nf').hasText('Page Build is in Progress...')
  });

  test('visiting /contact', async function (assert){
    await visit('/contact')
    assert.strictEqual(currentURL(), '/contact');
    assert.dom('.page-nf').hasText('Page Build is in Progress...')
  });

  test('visiting /add', async function (assert){
    await visit('/add')
    assert.strictEqual(currentURL(), '/add');
    assert.dom('.page-nf').hasText('Page Build is in Progress...')
  });

  // test('visiting /list', async function (assert){
  //   await visit ('/list')
  //   assert.strictEqual(currentURL(), '/list');
  //   assert.dom('page-heading').hasText('Filters');

  // });
});
