const bitposts = require('./bitposts/bitposts.service.js');
const bytes = require('./bytes/bytes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(bitposts);
  app.configure(bytes);
};
