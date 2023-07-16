const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const userData = req.body;

  const token = await userService.createUser({ ...userData });

  if (token.message) return res.status(token.status).json({ message: token.message });

  res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();

  if (allUsers.message) return res.status(allUsers.status).json({ message: allUsers.message });

  res.status(200).json(allUsers);
};

module.exports = { createUser, getAllUsers };