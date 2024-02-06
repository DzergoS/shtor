const express = require('express');
const adminRouter = express.Router();
const sendResponse = require('./../utils/response');
const uploadMiddleware = require("../middleware/upload");
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

adminRouter.post('/product/:id/images/create', uploadMiddleware.single('image'), imageController.uploadProductImage)
adminRouter.put('/product/:id/images/update/:imageName', uploadMiddleware.single('image'), imageController.editProductImage)
adminRouter.delete('/product/:id/images/delete/:imageName', imageController.deleteProductImage)

// adminRouter.post('/product/:id/variation-images/create', imageController)
// adminRouter.put('/product/:id/variation-images/update', imageController)
// adminRouter.delete('/product/:id/variation-images/delete', imageController)

// adminRouter.post('/product/:id/seashells-images/create', imageController)
// adminRouter.put('/product/:id/seashells-images/update', imageController)
// adminRouter.delete('/product/:id/seashells-images/delete', imageController)

module.exports = adminRouter;
