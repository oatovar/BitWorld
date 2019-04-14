/* eslint-disable no-unused-vars */

class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async create (data, params) {
    const bitposts = this.app.service('bitposts');
    const message = await bitposts.get(data.messageid);
    let upbits = parseInt(message.upbits);
    let downbits = parseInt(message.downbits);

    if (data.action === 'upbit') {
      upbits += 1;
    }

    if (data.action === 'downbit') {
      downbits += 1;
    }

    const result = bitposts.patch(data.messageid, {
      'upbits': upbits.toString(),
      'downbits': downbits.toString()
    });

    return result;
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
