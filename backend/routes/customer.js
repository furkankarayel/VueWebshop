const express = require('express');
const customerRouter = express.Router();
const customerController = require("../controller/customer");

// POST login customer
customerRouter.post("/login", customerController.loginCustomer);

// GET returns all customers
customerRouter.get("/customer", customerController.getCustomers);

// GET gets specific customer
customerRouter.get("/customer/:id", customerController.getCustomerById);

//POST create new customer
customerRouter.post("/customer", customerController.createCustomer);

// PUT updates specific customer
customerRouter.put("/customer/:id", customerController.updateCustomer);

// DELETE deletes specific customer
customerRouter.delete("/customer/:id", customerController.deleteCustomer);

module.exports = customerRouter;
