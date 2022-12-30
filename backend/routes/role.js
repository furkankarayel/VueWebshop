const express = require("express");
const router = express.Router();
const roleController = require("./controller/role");

// GET returns all roles
router.get("/role", roleController.getRoles());

// GET gets specific role
router.get("/role/:id", roleController.getRoleById());

//POST create new role
router.post("/role", roleController.createRole());

// PUT updates specific role
router.put("/role/:id", roleController.updateRole());

// DELETE deletes specific role
router.delete("/role/:id", roleController.deleteRole());

module.exports = router;
