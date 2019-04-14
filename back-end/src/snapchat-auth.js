/* eslint-disable no-unused-vars */

/* Helper Functions */
const generateClientState = require('./helpers/snapchat/crypto-helper');
const buildURL = require('./helpers/snapchat/url-builder');
const request = require('request');

/* Constants */
const clientId = process.env.SNAP_CLIENT_ID;
const clientSecret = process.env.SNAP_CLIENT_SECRET;
const redirectURL = 'http://localhost:3030/success';
const scopeList = ['https://auth.snapchat.com/oauth2/api/user.display_name', 'https://auth.snapchat.com/oauth2/api/user.bitmoji.avatar'];
const SNAPCHAT_AUTH_ENDPOINT = 'https://accounts.snapchat.com/accounts/oauth2/token';

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
    
    let authCode = req.query.code;
    const authorizationHeader = `${clientId}:${clientSecret}`;
    const authorizationHeaderBase64 = Buffer.from(authorizationHeader).toString('base64');
    
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + authorizationHeaderBase64
    };

    const options = {
      url: SNAPCHAT_AUTH_ENDPOINT,
      method: 'POST',
      headers: headers,
      form:{
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirectURL,
        client_id: clientId,
      }
    };

    request(options, function (error, response, body) {
      // Handle success and error responses here
      // Make sure to persist access_token, refresh_token, and expires_in
      let accessToken = JSON.parse(body).access_token;     
      res.cookie('accessToken', accessToken);
      res.send({
        'status': 'Successfully authenticated.',
        'token': accessToken
      });
    });

  });
};