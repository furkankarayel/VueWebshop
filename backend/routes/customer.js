const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer");

// POST login customer
router.post("/login", customerController.loginCustomer);

// GET returns all customers
router.get("/customer", customerController.getCustomers);

// GET gets specific customer
router.get("/customer/:id", customerController.getCustomerById);

//POST create new customer
router.post("/customer", customerController.createCustomer);

// PUT updates specific customer
router.put("/customer/:id", customerController.updateCustomer);

// DELETE deletes specific customer
router.delete("/customer/:id", customerController.deleteCustomer);

module.exports = router;
