const express = require('express');
const categoryRouter = express.Router();
const categoryController = require("../controller/category");

// GET returns all categories
categoryRouter.get("/category", categoryController.getCategories);

// GET gets specific category
categoryRouter.get("/category/:id", categoryController.getCategoryById);

//POST create new category
categoryRouter.post("/category", categoryController.createCategory);

// PUT updates specific category
categoryRouter.put("/category/:id", categoryController.updateCategory);

// DELETE deletes specific category
categoryRouter.delete("/category/:id", categoryController.deleteCategory);

module.exports = categoryRouter;