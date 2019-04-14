// Initializes the `bytes` service on path `/bytes`
const createService = require('./bytes.class.js');
const hooks = require('./bytes.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bytes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('bytes');

  service.hooks(hooks);
};
