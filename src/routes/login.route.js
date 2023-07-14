const express = require('express');
const controller = require('../controllers/login.controller');
const loginValidate = require('../middleware/loginValidate');

const loginRouter = express.Router();

loginRouter.post('/', loginValidate, controller.login);

module.exports = loginRouter;
