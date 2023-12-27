const express = require('express'),
  productRouter = express.Router(),
  authMiddleware = require('./../../middleware/auth'),
  sendResponse = require('./../../shortcuts/response'),
  { BaseProduct, BraceletProduct, ShellProduct } = require('./../../models/Products');


const getProductByType = async (res, productModel) => {
    try {
        const products = await productModel.find();
        return sendResponse(res, 200, true, { data: products }, "");
    } catch (error) {
        return sendResponse(res, 500, false, {}, "Internal Server Error");
    }
};

const getProductByTypeId = async (res, req, productModel) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return sendResponse(res, 404, false, {}, "Product not found");
        }
        return sendResponse(res, 200, true, { data: product }, "");
    } catch (error) {
        return sendResponse(res, 500, false, {}, "Internal Server Error");
    }
}

productRouter.use(authMiddleware);


productRouter.get('/regular', async (req, res) => {
    return await getProductByType(res, BaseProduct);
});

productRouter.get('/regular/:id', async (req, res) => {
    return await getProductByTypeId(res, req, BaseProduct)
});


productRouter.get('/bracelet', async (req, res) => {
    return await getProductByType(res, BraceletProduct);
});

productRouter.get('/bracelet/:id', async (req, res) => {
    return await getProductByTypeId(res, req, BraceletProduct)
});


productRouter.get('/shell', async (req, res) => {
    return await getProductByType(res, ShellProduct);
});

productRouter.get('/shell/:id', async (req, res) => {
    return await getProductByTypeId(res, req, ShellProduct)
});


module.exports = productRouter;

