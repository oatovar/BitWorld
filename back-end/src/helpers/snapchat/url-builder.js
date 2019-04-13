// ******************** URL Builder Helper ***********************

/* eslint-disable no-unused-vars */

const _qs = require('qs'); // Will need to 'npm install qs'

let getAuthCodeRedirectURL = function getAuthCodeRedirectURL(clientId, redirectUri, scopeList, state) {
  var SNAP_ACCOUNTS_LOGIN_URL = 'https://accounts.snapchat.com/accounts/oauth2/auth';
  var scope = scopeList.join(' ');
  var loginQS = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: scope,
    state: state
  };

  let stringifyLoginQS = _qs.stringify(loginQS);
  return SNAP_ACCOUNTS_LOGIN_URL + '?' + stringifyLoginQS;
};

module.exports = getAuthCodeRedirectURL;