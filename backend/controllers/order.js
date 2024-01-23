const { Order } = require("../models");
const genericController = require("../controllers");
const sendResponse = require('./../utils/response');

const createOrder = async (req, res) => {
	try {
		const savedOrder = await Order.create(req.body);
		return genericController.getObjectByType(res, savedOrder.constructor, savedOrder._id);
	} catch (error) {
		console.error('Error creating product:', error);
		return sendResponse(res, 500, false, {}, `Internal Server Error - ${error}`); 
	}
};

module.exports = {
	createOrder,
};
