const express = require('express');
const articleGroupRouter = express.Router();
const articleGroupController = require("../controller/articlegroup");

// GET returns all article groups
articleGroupRouter.get("/articlegroup", articleGroupController.getArticleGroups);

// GET gets specific article group
articleGroupRouter.get("/articlegroup/:id", articleGroupController.getArticleGroupById);

//POST create new article group
articleGroupRouter.post("/articlegroup", articleGroupController.createArticleGroup);

// PUT updates specific article group
articleGroupRouter.put("/articlegroup/:id", articleGroupController.updateArticleGroup);

// DELETE deletes specific article group
articleGroupRouter.delete("/articlegroup/:id", articleGroupController.deleteArticleGroup);

module.exports = articleGroupRouter;

