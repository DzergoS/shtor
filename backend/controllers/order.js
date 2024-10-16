const { Order } = require("../models"),
	  sendResponse = require('./../utils/response')

const createOrder = async (req, res) => {
	try {
		const savedOrder = await Order.create(req.body);
		return sendResponse(res, 200, true, { savedOrder }, 'Order precreated successfully');
	} catch (error) {
		console.error('Error creating product:', error);
		return sendResponse(res, 500, false, {}, `Internal Server Error - ${error}`); 
	}
};

const deleteOrderById = async (req, res) => {
	try {
		const orderId = req.params.id;
		const deletedOrder = await Order.findByIdAndDelete(orderId);
		if (!deletedOrder) {
			return sendResponse(res, 404, false, null, "Order not found.");
		}

		return sendResponse(res, 200, true, null, "Order deleted successfully.");
	} catch (error) {
		console.error("Error deleting order:", error);
		return sendResponse(res, 500, false, null, "Internal server error.");
	}
};

module.exports = {
	createOrder,
	deleteOrderById
};
