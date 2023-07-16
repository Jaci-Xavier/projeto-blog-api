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

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  if (user.message) return res.status(404).json({ message: user.message });

  res.status(200).json(user);
};

module.exports = { 
  createUser,
  getAllUsers,
  getById,
 };