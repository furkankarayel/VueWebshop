const express = require("express");
const router = express.Router();
const categoryController = require("./controller/category");

// GET returns all categories
router.get("/category", categoryController.getCategories());

// GET gets specific category
router.get("/category/:id", categoryController.getCategoryById());

//POST create new category
router.post("/category", categoryController.createCategory());

// PUT updates specific category
router.put("/category/:id", categoryController.updateCategory());

// DELETE deletes specific category
router.delete("/category/:id", categoryController.deleteCategory());

module.exports = router;
