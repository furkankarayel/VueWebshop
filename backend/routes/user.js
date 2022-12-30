const express = require("express");
const router = express.Router();
const userController = require("./controller/user");

// GET returns all users
router.get("/user", userController.getUsers());

// GET gets specific user
router.get("/user/:id", userController.getUserById());

//POST create new user
router.post("/user", userController.createUser());

// PUT updates specific user
router.put("/user/:id", userController.updateUser());

// DELETE deletes specific user
router.delete("/user/:id", userController.deleteUser());

module.exports = router;
