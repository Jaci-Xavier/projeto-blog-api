const { BlogPost, Category, PostCategory, User } = require('../models');

const createPost = async (userId, title, content, categoryIds) => {
  const allCategory = await Category.findAll();

  const allCategoryIds = allCategory.map((categoryId) => categoryId.id);

  const existThisCategory = categoryIds.every((item) => allCategoryIds.includes(item));

  if (!existThisCategory) return { status: 400, message: 'one or more "categoryIds" not found' };

  const newPost = await BlogPost.create({ title, content, userId });

  categoryIds.forEach(async (id) => {
    await PostCategory.create({ postId: newPost.id, categoryId: id });
  });

  return newPost;
};

const getPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

module.exports = { createPost, getPost };