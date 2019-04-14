const assert = require('assert');
const app = require('../../src/app');

describe('\'bitposts\' service', () => {
  it('registered the service', () => {
    const service = app.service('bitposts');

    assert.ok(service, 'Registered the service');
  });
});
