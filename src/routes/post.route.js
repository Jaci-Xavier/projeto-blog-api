const express = require('express');
const controller = require('../controllers/post.controller');
const { existToken, validateToken } = require('../middleware/verifyToken');
const postValidate = require('../middleware/postValidate');

const postRouter = express.Router();

postRouter.post(
  '/',
  postValidate,
  existToken,
  validateToken,
  controller.createPost,
);

module.exports = postRouter;