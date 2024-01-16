const { Product } = require("../models");
const genericController = require("../controllers");
const sendResponse = require('./../utils/response');

const createProduct = async (req, res) => {
	try {
		const savedProduct = await Product.create(req.body);
		return genericController.getObjectByType(res, savedProduct.constructor, savedProduct._id);
	} catch (error) {
		console.error('Error creating product:', error);
		return sendResponse(res, 500, false, {}, 'Internal Server Error');
	}
};

const updateProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			req.body,
			{ new: true, runValidators: true }
		);

		if (!updatedProduct) {
			return sendResponse(res, 404, false, {}, 'Product not found');
		}

		return sendResponse(res, 200, true, { data: updatedProduct }, 'Product updated successfully');
	} catch (error) {
		console.error(error);
		return sendResponse(res, 500, false, {}, 'Internal Server Error');
	}
};

module.exports = {
	createProduct,
	updateProduct,
};
