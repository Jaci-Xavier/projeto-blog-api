const express = require('express');
const controller = require('../controllers/user.controller');
const passwordValidate = require('../middleware/passwordValidate');
const emailRegex = require('../middleware/emailRegex');
const { displayNameValidate } = require('../middleware/displayNameValidate');
const existingEmail = require('../middleware/verifyUserExist');
const { existToken, validateToken } = require('../middleware/verifyToken');

const userRouter = express.Router();

userRouter.post(
'/', 
existingEmail,
passwordValidate,
displayNameValidate,
emailRegex,
controller.createUser,
);

userRouter.get(
  '/',
  existToken,
  validateToken,
  controller.getAllUsers,
  );

module.exports = userRouter;