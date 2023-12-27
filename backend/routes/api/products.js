const express = require('express'),
  productRouter = express.Router(),
  authMiddleware = require('./../../middleware/auth'),
  { getObjectByType, getObjectByTypeId } = require('./../../utils/objects'),
  { BaseProduct, BraceletProduct, ShellProduct } = require('./../../models/index');


productRouter.use(authMiddleware);


productRouter.get('/regular', async (req, res) => {
    return await getObjectByType(res, BaseProduct);
});

productRouter.get('/regular/:id', async (req, res) => {
    return await getObjectByTypeId(res, req, BaseProduct)
});


productRouter.get('/bracelet', async (req, res) => {
    return await getObjectByType(res, BraceletProduct);
});

productRouter.get('/bracelet/:id', async (req, res) => {
    return await getObjectByTypeId(res, req, BraceletProduct)
});


productRouter.get('/shell', async (req, res) => {
    return await getObjectByType(res, ShellProduct);
});

productRouter.get('/shell/:id', async (req, res) => {
    return await getObjectByTypeId(res, req, ShellProduct)
});


module.exports = productRouter;

