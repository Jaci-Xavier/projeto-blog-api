const { verifyToken } = require('../utils/auth.jwt');

const existToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    const tokenBearer = token.includes('Bearer') ? token.split(' ')[1] : token;
    const verify = await verifyToken(tokenBearer);
    req.user = verify;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { 
  existToken,
  validateToken,
};
