// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const data = context.data;
    let date = new Date();
    let timestamp = date.getTime();
    data.postdate = timestamp;
    return context;
  };
};
