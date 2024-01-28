const express = require('express'),
	orderRouter = express.Router(),
	axios = require('axios'),
	orderController = require('../controllers/order'),
	sendResponse = require('../utils/response'),
	{ HOSTNAME, PORT } = require('../config'),
	{ Order } = require('../models'),
	{ sendOrderDetails } = require('../services/email');



const HOST = HOSTNAME === 'localhost' ? `${HOSTNAME}:${PORT}` : HOSTNAME
const PROTOCOL = HOSTNAME === 'localhost' ? 'http' : 'https';



orderRouter.post('/create', orderController.createOrder)
// orderRouter.post('/create', async (req, res) => {
// 	console.log(req.body)
// 	return await orderController.createOrder(req)
// 	// await(orderController.createOrder)
// })


orderRouter.post('/send', async (req, res) => {
	// try {
		const order = await Order.findOneAndUpdate(
			{ order_id: req.body.order_id },
			{ $set: { approved: true } },
			{ new: true }
		)
	// } catch (error) {
	// 	return sendResponse(res, 500, false, {}, `Error: ${error}`)
	// }
	
	let shippingPrice;

	if (order.shippingInfo.type === 'Ukrainian') {
	  shippingPrice = 0;
	} else if (order.language === 'uk') {
	  shippingPrice = 1125;
	} else {
	  shippingPrice = 30;
	}
	

	await sendOrderDetails(
		order.email, order.products,
		shippingPrice, order.amount
	)

	const redirectWithMessage = `${PROTOCOL}://${HOST}/thankyoupage`;
	return res.redirect(redirectWithMessage);

    // const requestData = {
    //     request: {
    //         order_id: req.body.order_id,
    //         merchant_id: req.body.merchant_id,
    //         signature: req.body.signature
    //     }
    // }
    // try {
    //     const response = await axios.post('https://pay.fondy.eu/api/status/order_id', requestData)

	// 	console.log(response);

	// 	if (response.order_status === 'approved') {
			
			
    //     return sendResponse(res, 200, true, responseData, 'Payment status checked successfully')
	// 	}
	// 	return sendResponse(res, 500, false, {}, 'Error: Payment not approved')
    // } catch (error) {
    //     return sendResponse(res, 500, false, {}, `Error: ${error}`)
    // }
})


module.exports = orderRouter
