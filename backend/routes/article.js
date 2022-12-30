const express = require("express");
const router = express.Router();
const articleController = require("./controller/article");

// GET returns all articles
router.get("/article", articleController.getArticles());

// GET gets specific article
router.get("/article/:id", articleController.getArticleById());

//POST create new article
router.post("/article", articleController.createArticle());

// PUT updates specific article
router.put("/article/:id", articleController.updateArticle());

// DELETE deletes specific article
router.delete("/article/:id", articleController.deleteArticle());

module.exports = router;
