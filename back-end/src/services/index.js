const bitposts = require('./bitposts/bitposts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(bitposts);
};
