const express = require("express");
const router = express.Router();
const articleController = require("./controller/articlegroup");

// GET returns all article groups
router.get("/articleGroup", articleController.getArticleGroup());

// GET gets specific article group
router.get("/articleGroup/:id", articleController.getArticleGroupById());

//POST create new article group
router.post("/articleGroup", articleController.createArticleGroup());

// PUT updates specific article group
router.put("/articleGroup/:id", articleController.updateArticleGroup());

// DELETE deletes specific article group
router.delete("/articleGroup/:id", articleController.deleteArticleGroup());

module.exports = router;
