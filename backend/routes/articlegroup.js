const express = require("express");
const router = express.Router();
const articleGroupController = require("../controller/articlegroup");

// GET returns all article groups
router.get("/articlegroup", articleGroupController.getArticleGroups);

// GET gets specific article group
router.get("/articlegroup/:id", articleGroupController.getArticleGroupById);

//POST create new article group
router.post("/articlegroup", articleGroupController.createArticleGroup);

// PUT updates specific article group
router.put("/articlegroup/:id", articleGroupController.updateArticleGroup);

// DELETE deletes specific article group
router.delete("/articlegroup/:id", articleGroupController.deleteArticleGroup);

module.exports = router;
