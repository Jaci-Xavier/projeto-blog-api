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

postRouter.get(
  '/',
  existToken,
  validateToken,
  controller.getPost,
);

postRouter.get(
  '/:id',
  existToken,
  validateToken,
  controller.getById,
);

postRouter.put(
  '/:id',
  existToken,
  validateToken,
  postValidate,
  controller.putById,
);

module.exports = postRouter;