const express = require('express'),
	orderRouyter = express.Router(),
	orderController = require('../controllers/order'),
	sendResponse = require('../utils/response'),
	{ sendOrderDetails } = require('../services/email')

orderRouyter.post('/create', orderController.createOrder)

orderRouyter.get('/send', async (req, res) => {
	const { email } = req.body;

	// try {
    //     await sendOrderDetails(email)
    // } catch (error) {
    //     return sendResponse(res, 500, false, {}, 'Error sending activation email. Try again later')
    // }

	await sendOrderDetails(email)
    return sendResponse(res, 200, true, {}, `Order details sent on ${email}. Thank You for purchase!`)
});

orderRouyter.get('/sendTrackNumber', async (req, res) => {
	const { trackNumber, email } = req.body;

	//TODO: add trackNumber email with template

	// await sendOrderDetails(email)
    return sendResponse(res, 200, true, {}, `Order details sent on ${email}. Thank You for purchase!`)
});

module.exports = orderRouyter;
