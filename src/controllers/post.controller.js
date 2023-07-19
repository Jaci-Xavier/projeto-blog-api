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

const getById = async (req, res) => {
  const { id } = req.params;

  const postById = await postService.getById(id);

  console.log(postById);

  if (postById.message) return res.status(postById.status).json({ message: postById.message });

  res.status(200).json(postById);
};

const putById = async (req, res) => {
  const { id: userId } = req.user;
  const { title, content } = req.body;
  const { id } = req.params;

  const updatedPost = await postService.putById(id, title, content, userId);

  if (updatedPost.message) {
    return res.status(updatedPost.status).json({ message: updatedPost.message });
  }

  res.status(200).json(updatedPost);
};

module.exports = { createPost, getPost, getById, putById };