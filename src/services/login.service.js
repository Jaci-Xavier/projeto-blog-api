const { Op } = require('sequelize');
const { User } = require('../models');
const createToken = require('./auth.jwt');

const filterPassword = (obj) => {
  const excludeKey = 'password';
  const filtredObj = Object.keys(obj)
    .filter((key) => key !== excludeKey)
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});

  return filtredObj;
};

const login = async (email, password) => {
  const client = await User.findAll({ where:
    { [Op.and]: [{ email }, { password }] },
  });
  
  if (client.length === 0) {
    return { message: 'Invalid fields' };
  }
  const payload = filterPassword(client[0].dataValues);
  const userToken = createToken(payload);
  return userToken;

  // switch (true) {
  //   case !client || client.password !== password:
  //     return { message: 'Invalid fields' };
  //   default:
  //     return userToken;
  // }
};

module.exports = { login };
