const express = require('express');
const controller = require('../controllers/login.controller');
const passwordValidate = require('../middleware/passwordValidate');
const emailRegex = require('../middleware/emailRegex');

const loginRouter = express.Router();

loginRouter.post(
'/',
  passwordValidate,
  emailRegex,
  controller.login,
);

module.exports = loginRouter;
