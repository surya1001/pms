const express = require("express");
const router = express.Router();

const {
  getCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  createCategory,
} = require("../controllers/categoryController");

router.get("/category", getCategory);
router.get("/category/:id", getCategoryById);

router.post("/category", createCategory);

router.put("/category/:id", updateCategory);

router.delete("/category/:id", deleteCategory);

module.exports = router;
