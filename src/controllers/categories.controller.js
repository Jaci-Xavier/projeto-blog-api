const categoryService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory(name);

  if (newCategory.message) {
    return res.status(newCategory.status).json({ message: newCategory.message });
  }

  res.status(201).json(newCategory);
};

const getAllCategory = async (req, res) => {
  const allCategory = await categoryService.getAllCategory();

  if (allCategory.message) {
    return res.status(allCategory.status).json({ message: allCategory.message }); 
  }
  res.status(200).json(allCategory);
};

module.exports = { createCategory, getAllCategory };