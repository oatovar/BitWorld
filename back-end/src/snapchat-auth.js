/* eslint-disable no-unused-vars */

/* Helper Functions */
const generateClientState = require('./helpers/snapchat/crypto-helper');
const buildURL = require('./helpers/snapchat/url-builder');

/* Constants */
const clientId = process.env.SNAP_CLIENT_ID;
const clientSecret = process.env.SNAP_CLIENT_SECRET;
const redirectURL = 'http://localhost:3030/success';
const scopeList = ['https://auth.snapchat.com/oauth2/api/user.display_name', 'https://auth.snapchat.com/oauth2/api/user.bitmoji.avatar'];

module.exports = function (app) {
  app.get('/snapchat', function(req, res, next) {
    // Create 'state' token
    let state = generateClientState();

    // Build URL
    let getRedirectURL = buildURL(clientId, redirectURL, scopeList, state);

    res.redirect(getRedirectURL);
  });

  app.get('/success', function(req, res, next) {
    /* TODO: add state tokens into a memory store such as rocksdb or redis
     * and make sure that they are valid.
     */
    
    res.send('Success!');
  });
};