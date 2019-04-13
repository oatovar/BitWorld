// ******************** Crypto Library Helper ***************************

const _crypto = require('crypto');

const OAUTH2_STATE_BYTES = 48;
const REGEX_PLUS_SIGN = /\+/g;
const REGEX_FORWARD_SLASH = /\//g;
const REGEX_EQUALS_SIGN = /=/g;

/*
 * This function generates a random amount of bytes using the
 * crypto library
 *
 * @param {int} size - The number of random bytes to generate.
 *
 * @returns {Buffer} The generated number of bytes
 */
let generateRandomBytes = function generateRandomBytes(size) {
  return _crypto.randomBytes(size);
};

/*
 * This function encodes the given byte buffer into a base64 URL
 * safe string.
 *
 * @param {Buffer} bytesToEncode - The bytes to encode
 *
 * @returns {string} The URL safe base64 encoded string
 */
let generateBase64UrlEncodedString = function generateBase64UrlEncodedString(bytesToEncode) {
  return bytesToEncode
    .toString('base64')
    .replace(REGEX_PLUS_SIGN, '-')
    .replace(REGEX_FORWARD_SLASH, '_')
    .replace(REGEX_EQUALS_SIGN, '');
};

/*
 * This function generates the state required for both the
 * OAuth2.0 Authorization and Implicit grant flow
 *
 * @returns {string} The URL safe base64 encoded string
 */
let generateClientState = function generateClientState() {
  return generateBase64UrlEncodedString(
    generateRandomBytes(OAUTH2_STATE_BYTES)
  );
};

module.exports = generateClientState;