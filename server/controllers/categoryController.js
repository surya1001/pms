const Category = require("../models/categoryModel");

const getCategory = async (req, res) => {
  try {
    const category = await Category.find({}).sort({ name: 1 });
    return res.status(200).send(category);
  } catch (error) {
    return res.status(400).send("Something went wrong : " + error);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const _id = req.params.id;
    const category = await Category.findById({ _id });
    return res.status(200).send(category);
  } catch (error) {
    return res.status(400).send("Something went wrong : " + error);
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Please enter the category name");
  }
  try {
    const category = new Category({ name });
    await category.save();
    return res.status(200).send(category);
  } catch (error) {
    return res.status(400).send("Something went wrong : " + error);
  }
};

const updateCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Please fill the category name");
  }
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!category) {
      return res.status(400).send("No Such Category Found");
    }
    return res.status(200).send(`Updated Category ${category.name}`);
  } catch (error) {
    return res.status(400).send("Something went wrong : " + error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(400).send("No Such Category Found");
    }
    return res.send(`${category.name} Category Deleted`);
  } catch (error) {
    return res.status(400).send("Something went wrong : " + error);
  }
};

module.exports = {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
