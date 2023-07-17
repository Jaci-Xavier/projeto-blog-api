const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAllCategory = async () => {
  const allCategory = await Category.findAll();
  
  return allCategory;
};

module.exports = { createCategory, getAllCategory };