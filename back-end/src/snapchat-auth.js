/* eslint-disable no-unused-vars */

/* Helper Functions */
const generateClientState = require('./helpers/snapchat/crypto-helper');
const buildURL = require('./helpers/snapchat/url-builder');

/* Constants */
const clientId = process.env.SNAP_CLIENT_ID;
const clientSecret = process.env.SNAP_CLIENT_SECRET;
const redirectURL = 'https://my-redirect-uir.com';
const scopeList = ['https://auth.snapchat.com/oauth2/api/example.abc', 'https://auth.snapchat.com/oauth2/api/example.xyz'];

module.exports = function (app) {
  app.get('/auth/sc', function(req, res, next) {
    // Generate state
    let state = generateClientState();

    // Build URL
    let getRedirectURL = buildURL(clientId, redirectURL, scopeList, state);

    res.send(getRedirectURL);
  });
};