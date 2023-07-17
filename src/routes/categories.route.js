const express = require('express');
const controller = require('../controllers/categories.controller');
const nameValidate = require('../middleware/nameValidate');
const { existToken, validateToken } = require('../middleware/verifyToken');

const categoriesRouter = express.Router();

categoriesRouter.post(
  '/',
  nameValidate,
  existToken,
  validateToken,
  controller.createCategory,
);

module.exports = categoriesRouter;