const { Order } = require("../models"),
	  genericController = require("../controllers"),
	  sendResponse = require('./../utils/response')

const createOrder = async (req, res) => {
	try {
		console.log(req.body);
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
