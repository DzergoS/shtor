const express = require('express'),
	adminRouter = express.Router(),
	sendResponse = require('./../utils/response');
const uploadMiddleware = require("../middleware/upload");
	productController = require("../controllers/product");

adminRouter.get('/', (req, res) =>
	sendResponse(res, 200, true, {email: req.user.email}, ""))

adminRouter.post('/product', productController.createProduct);

adminRouter.put('/product/:id', productController.updateProduct);

adminRouter.post('/upload/image', uploadMiddleware.single('image'), (req, res) => {
	try {
		// Check for errors in req.file
		if (req.file) {
			// If there is no error, send a success response
			sendResponse(res, 200, true, { file: req.file }, 'File uploaded successfully');
		} else {
			// If there is an error, send an error response
			sendResponse(res, 400, false, {}, 'Error uploading file');
		}
	} catch (error) {
		// Handle any unexpected errors
		console.error('Error handling image upload:', error);
		sendResponse(res, 500, false, {}, 'Internal Server Error');
	}
});

module.exports = adminRouter;
