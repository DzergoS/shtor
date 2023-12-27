const express = require('express'),
  paramsRouter = express.Router(),
  authMiddleware = require('./../../middleware/auth'),
  { getObjectByType, getObjectByTypeId } = require('./../../utils/objects'),
  { Attachment, ProductColor } = require('./../../models/index');


paramsRouter.use(authMiddleware);

paramsRouter.get('/attachment', async (req, res) => {
    return await getObjectByType(res, Attachment);
});

paramsRouter.get('/attachment/:id', async (req, res) => {
    return await getObjectByTypeId(res, req, Attachment)
});

paramsRouter.get('/product-color', async (req, res) => {
    return await getObjectByType(res, ProductColor);
});

paramsRouter.get('/product-color/:id', async (req, res) => {
    return await getObjectByTypeId(res, req, ProductColor)
});

module.exports = paramsRouter;