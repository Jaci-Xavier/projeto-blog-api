const { Op } = require('sequelize');
const { User } = require('../models');
const { createToken } = require('../utils/auth.jwt');

// const filterPassword = (obj) => {
//   const excludeKey = 'password';
//   const filtredObj = Object.keys(obj)
//     .filter((key) => key !== excludeKey)
//     .reduce((acc, key) => {
//       acc[key] = obj[key];
//       return acc;
//     }, {});

//   return filtredObj;    
// };

const login = async (email, password) => {
  const client = await User.findAll({ where:
    { [Op.and]: [{ email }, { password }] },
  });

  if (client.length === 0) {
    return { message: 'Invalid fields' };
  }
  const { id } = client[0].dataValues;

  // const payload = filterPassword(client[0].dataValues);
  const userToken = createToken({ email, id });
  return userToken;
};

module.exports = { login };
