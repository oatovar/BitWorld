// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { BadRequest } = require('@feathersjs/errors');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const data = context.data;
    if (!data.message || data.message.trim() == '' || typeof data.message !== 'string') {
      throw new BadRequest('BitPost is invalid!');
    }
    if (!data.upbits || !data.downbits) {
      throw new BadRequest('No UpBits or DownBits field found!');
    }
    if (!data.username) {
      throw new BadRequest('No Username found!');
    }
    return context;
  };
};
