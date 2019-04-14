

const validateBitpost = require('../../hooks/validate-bitpost');

const postdate = require('../../hooks/postdate');

const initBitpost = require('../../hooks/init-bitpost');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [postdate(), initBitpost(), validateBitpost()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
