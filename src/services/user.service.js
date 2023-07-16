const { User } = require('../models');
const { createToken } = require('../utils/auth.jwt');

const createUser = async (body) => {
  const client = await User.create({ ...body });
  const payload = {
    id: client.id,
    email: body.email,
  };
  const userToken = createToken(payload);
  return userToken;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });

  return allUsers;
};

module.exports = {
  createUser,
  getAllUsers,
 };