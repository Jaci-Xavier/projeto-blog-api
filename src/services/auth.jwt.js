const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = { algorithm: 'HS256' };

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

// const validateToken = async () => {

// };

module.exports = createToken;