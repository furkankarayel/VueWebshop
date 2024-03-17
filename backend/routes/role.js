const express = require('express');
const roleRouter = express.Router();
const roleController = require("../controller/role");

// GET returns all roles
roleRouter.get("/role", roleController.getRoles);

// GET gets specific role
roleRouter.get("/role/:id", roleController.getRoleById);

//POST create new role
roleRouter.post("/role", roleController.createRole);

// PUT updates specific role
roleRouter.put("/role/:id", roleController.updateRole);

// DELETE deletes specific role
roleRouter.delete("/role/:id", roleController.deleteRole);

module.exports = roleRouter;

