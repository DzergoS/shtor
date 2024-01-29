const express = require('express'),
	orderRouter = express.Router(),
	// axios = require('axios'),
	orderController = require('../controllers/order'),
	sendResponse = require('../utils/response'),
	authMiddleware = require('../middleware/auth'),
	{ HOSTNAME, PORT } = require('../config'),
	{ Order } = require('../models'),
	{ sendOrderDetails, sendTrackingId } = require('../services/email');


const HOST = HOSTNAME === 'localhost' ? `${HOSTNAME}:${PORT}` : HOSTNAME
const PROTOCOL = HOSTNAME === 'localhost' ? 'http' : 'https';


orderRouter.post('/create', orderController.createOrder)

orderRouter.post('/send-order-details', async (req, res) => {
	const order = await Order.findOneAndUpdate(
		{ order_id: req.body.order_id },
		{ $set: {
			approved: true,
			email: req.body.sender_email
		}},
		{ new: true }
	)

	await sendOrderDetails(
		order.language,
		order.email,
		order.products,
		order.currency,
		order.amount,
		order.shippingInfo.delivery_price
	)

	const thankYouPagePath = `${PROTOCOL}://${HOST}/thankyoupage`;
	return res.redirect(thankYouPagePath);

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


orderRouter.post('/send-tracking-id', authMiddleware, async (req, res) => {
	const requestData = {
		email: req.body.email,
		language: req.body.language,
		tracking_id: req.body.tracking_id,
		shipping_type: req.body.shipping_type,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
    }

	try {
		await sendTrackingId(requestData)
		return sendResponse(res, 500, false, {}, `Tracking id sent on: ${requestData.email}`)
	} catch (err) {
		return sendResponse(res, 500, false, {}, `Error sending tracking id: ${err}`)
	}
})

module.exports = orderRouter
