const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = { algorithm: 'HS256' };

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { 
  createToken,
  verifyToken,
 };