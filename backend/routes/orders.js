const express = require('express'),
	paramsRouter = express.Router(),
	{ Order } = require('./../models');
const {getObjectByType, getObjectByTypeId} = require("../controllers");

paramsRouter.get('/', async (req, res) => {
	return await getObjectByType(res, Order);
});

paramsRouter.get('/:id', async (req, res) => {
	return await getObjectByTypeId(res, req, Order)
});

module.exports = paramsRouter;
