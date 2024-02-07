const express = require('express');
const adminRouter = express.Router();
const sendResponse = require('./../utils/response');
const { uploadMiddleware, errorHandler } = require("../middleware/upload");
const productController = require("../controllers/product");
const imageController = require("../controllers/image");

adminRouter.get('/', (req, res) =>
	sendResponse(res, 200, true, {email: req.user.email}, ""))

adminRouter.post('/product', productController.createProduct);

adminRouter.post('/product/:id', productController.updateProductById);

adminRouter.put('/product/updateOrder', productController.updateProductsOrder);

adminRouter.put('/product/:id', productController.updateProductKeyById);

adminRouter.post('/product/:id/copy', productController.copyProductById);

adminRouter.delete('/product/:id', productController.deleteProductById);


// adminRouter.post('/upload/image', uploadMiddleware.single('image'), imageController.uploadImage);

adminRouter.post('/product/:id/images/create', uploadMiddleware.single('image'), imageController.createProductImage)
adminRouter.put('/product/:id/images/update/:imageName', uploadMiddleware.single('image'), imageController.editProductImage)
adminRouter.delete('/product/:id/images/delete/:imageName', imageController.deleteProductImage)

adminRouter.post('/product/:id/variations/:variationIndex/images/create', uploadMiddleware.single('image'), imageController.addVariationImage)
adminRouter.put('/product/:id/variations/:variationIndex/images/update/:imageName', uploadMiddleware.single('image'), imageController.editVariationImage)
adminRouter.delete('/product/:id/variations/:variationIndex/images/delete/:imageName', imageController.deleteVariationImage)

adminRouter.post('/product/:id/seashells/create',
				 uploadMiddleware.array('images', 2),
				 errorHandler,
				 imageController.createSeashellImages)
adminRouter.put('/product/:id/seashells/:seashellIndex/update',
				uploadMiddleware.array('images', 2),
				errorHandler,
				imageController.editSeashellImages)
adminRouter.delete('/product/:id/seashells/:seashellIndex/delete', imageController.deleteSeashellImages)

module.exports = adminRouter;

