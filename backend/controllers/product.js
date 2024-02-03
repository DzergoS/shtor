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

const updateProductById = async (req, res) => {
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

const updateProductKeyById = async (req, res) => {
	const { id } = req.params;
	const updateData = req.body; // Update data containing key-value pairs

	try {
		const product = await Product.findById(id);

		if (!product) {
			return sendResponse(res, 404, false, {}, 'Product not found');
		}

		// Update product fields based on the provided key-value pairs
		for (const key in updateData) {
			if (Object.prototype.hasOwnProperty.call(updateData, key)) {
				product[key] = updateData[key];
			}
		}

		// Save the updated product
		const updatedProduct = await product.save();

		return sendResponse(res, 200, true, { data: updatedProduct }, 'Product updated successfully');
	} catch (error) {
		console.error(error);
		return sendResponse(res, 500, false, {}, 'Internal Server Error');
	}
};

const copyProductById = async (req, res) => {
	try {
		const productId = req.params.id;
		// Fetch the product by ID from the database
		const productToCopy = await Product.findById(productId);
		if (!productToCopy) {
			return sendResponse(res, 404, false, null, "Product not found.");
		}

		const {_id, ...newProduct} = productToCopy.toObject()

		// Create a copy of the product
		const copiedProduct = new Product({...newProduct});

		// Save the copied product to the database
		await copiedProduct.save();

		// Respond with the copied product details
		return sendResponse(res, 200, true, {data: copiedProduct}, "Product copied successfully.");
	} catch (error) {
		// Handle errors
		console.error("Error copying product:", error);
		return sendResponse(res, 500, false, null, "Internal server error.");
	}
};

const deleteProductById = async (req, res) => {
	try {
		const productId = req.params.id;
		// Find the product by ID and remove it from the database
		const deletedProduct = await Product.findByIdAndDelete(productId);
		if (!deletedProduct) {
			return sendResponse(res, 404, false, null, "Product not found.");
		}

		// Respond with a success message
		return sendResponse(res, 200, true, null, "Product deleted successfully.");
	} catch (error) {
		// Handle errors
		console.error("Error deleting product:", error);
		return sendResponse(res, 500, false, null, "Internal server error.");
	}
};

const updateProductsOrder = async (req, res) => {
	console.log('req.body', req.body)
	const productIds = req.body;

	try {
		await Product.collection.dropIndex("orderIndex_1");
		// Loop through productIds and update orderIndex accordingly
		for (let i = 0; i < productIds.length; i++) {
			const productId = productIds[i];
			await Product.findByIdAndUpdate(productId, { orderIndex: i });
		}

		await Product.collection.createIndex({ orderIndex: 1 }, { unique: true });

		return sendResponse(res, 200, true, null, "Product order updated successfully");
	} catch (error) {
		console.error("Error updating product order:", error);
		return sendResponse(res, 500, false, null, "Failed to update product order");
	}
};

module.exports = {
	createProduct,
	updateProductById,
	updateProductKeyById,
	copyProductById,
	deleteProductById,
	updateProductsOrder,
};
