const { trusted } = require('mongoose');

const express = require('express'),
  productRouter = express.Router(),
  authMiddleware = require('./../../middleware/auth'),
  { getObjectByType, getObjectByTypeId } = require('./../../utils/objects'),
  { RegularProduct, BraceletProduct, ShellProduct } = require('./../../models/index');


productRouter.use(authMiddleware);


productRouter.get('/regular', async (req, res) => {
    return await getObjectByType(res, RegularProduct);
});

productRouter.get('/regular/:id', async (req, res) => {
    return await getObjectByTypeId(res, req, RegularProduct)
});

productRouter.post('/regular/add', async (req, res) => {
    try {
        // Parse the request body
        const {
          name,
          description,
          group,
          images,
          size,
          variations
        } = req.body;
    
        // Create a new RegularProduct document
        const regularProduct = new RegularProduct({
          name,
          description,
          group,
          images,
          size,
          variations
        });
    
        // Save the document to the database
        const savedProduct = await regularProduct.save();
    
        return res.status(201).json({
          success: true,
          data: savedProduct,
          message: 'Regular product created successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          data: null,
          message: 'Internal Server Error',
        });
    }
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

