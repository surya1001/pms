const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const page = parseInt(req.query.page || "0");
  const size = parseInt(req.query.size || "3");
  const totalnoofdocs = await Product.count();
  const totalpages = Math.ceil(totalnoofdocs / size);

  const limit = size;
  const skip = page * size;
  console.log(skip);

  try {
    const products = await Product.find()
      .populate("category", "_id name")
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    return res.status(200).json({ totalpages, products });
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findById({ _id }).populate(
      "category",
      "_id name"
    );
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !category || !price) {
    return res.status(400).send("Please fill all the required inputs");
  }
  try {
    const product = new Product({ name, price, category });
    await product.save();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateProduct = async (req, res) => {
  const { name, price, category } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category },
      { new: true }
    );
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).send(`Deleted Product ${product.name}`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
