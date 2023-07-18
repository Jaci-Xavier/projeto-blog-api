const postService = require('../services/post.service');

const createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;

  const newPost = await postService.createPost(id, title, content, categoryIds);

  if (newPost.message) return res.status(newPost.status).json({ message: newPost.message });

  console.log(newPost);

  res.status(201).json(newPost);
};

module.exports = { createPost };