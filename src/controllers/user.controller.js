const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const userData = req.body;
  // console.log(displayName);

  const token = await userService.createUser({ ...userData });

  if (token.message) return res.status(token.status).json({ message: token.message });

  res.status(201).json({ token });
};

module.exports = { createUser };