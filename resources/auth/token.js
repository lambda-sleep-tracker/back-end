// import json web token and secrets object
const jwt = require('jsonwebtoken');
const secrets = require('./authConfig');

module.exports = {
  generateToken,

};

// Create function to generate token
function generateToken(user) {
  const payload = {
    userId: user.id,
  };

  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secrets.jwt, options);
}
