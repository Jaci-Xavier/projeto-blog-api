const { User } = require('../models');

const existingEmail = async (req, res, next) => {
  const { email } = req.body;
  const clientExist = await User.findOne({ where: { email } });
  if (clientExist) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

module.exports = existingEmail;
