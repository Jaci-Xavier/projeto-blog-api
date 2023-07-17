const categoryService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory(name);

  if (newCategory.message) {
    return res.status(newCategory.status).json({ message: newCategory.message });
  }

  res.status(201).json(newCategory);
};

module.exports = { createCategory };