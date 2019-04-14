const assert = require('assert');
const app = require('../../src/app');

describe('\'bytes\' service', () => {
  it('registered the service', () => {
    const service = app.service('bytes');

    assert.ok(service, 'Registered the service');
  });
});
