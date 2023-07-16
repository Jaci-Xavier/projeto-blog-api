const { User } = require('../models');
const createToken = require('./auth.jwt');

const createUser = async (body) => {
  const client = await User.create({ ...body });
  const payload = { id: client.id, email: body.email };
  const userToken = createToken(payload);
  return userToken;
};

module.exports = { createUser };