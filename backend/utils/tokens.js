const crypto = require('crypto');

require('dotenv').config();


const SECRET_KEY = process.env.JWT_SECRET


function generateActivationToken(userId) {
  const hash = crypto.createHmac('sha256', SECRET_KEY);
  return hash.update(userId).digest('hex');
}

function validateActivationToken(userId, token) {
  const expectedToken = generateActivationToken(userId);
  return token === expectedToken;
}


module.exports = {
  generateActivationToken,
  validateActivationToken,
};