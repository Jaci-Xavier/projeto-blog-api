const postService = require('../services/post.service');

const createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;

  const newPost = await postService.createPost(id, title, content, categoryIds);

  if (newPost.message) return res.status(newPost.status).json({ message: newPost.message });

  console.log(newPost);

  res.status(201).json(newPost);
};

const getPost = async (req, res) => {
 const post = await postService.getPost();
 
 if (post.message) return res.status(post.status).json({ message: post.message });

 res.status(200).json(post);
};

module.exports = { createPost, getPost };