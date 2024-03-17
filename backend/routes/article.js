const express = require('express');
const articleController = require("../controller/article");
const articleRouter = express.Router();

// GET returns all articles
articleRouter.get("/article", articleController.getArticles);

// GET gets specific article
articleRouter.get("/article/:id", articleController.getArticleById);

//POST create new article
articleRouter.post("/article", articleController.createArticle);

// PUT updates specific article
articleRouter.put("/article/:id", articleController.updateArticle);

// DELETE deletes specific article
articleRouter.delete("/article/:id", articleController.deleteArticle);

module.exports = articleRouter;
