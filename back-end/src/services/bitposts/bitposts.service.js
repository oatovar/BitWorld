// Initializes the `bitposts` service on path `/bitposts`
const createService = require('feathers-mongodb');
const hooks = require('./bitposts.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/bitposts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('bitposts');

  mongoClient.then(db => {
    service.Model = db.collection('bitposts');
  });

  service.hooks(hooks);
};
