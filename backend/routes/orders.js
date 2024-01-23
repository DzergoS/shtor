const express = require('express'),
	orderRouyter = express.Router(),
	orderController = require("../controllers/order");

orderRouyter.post('/create', orderController.createOrder)

module.exports = orderRouyter;
