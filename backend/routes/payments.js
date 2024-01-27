const express = require('express'),
    paymentRouter = express.Router(),
    sendResponse = require('../utils/response');
const {Order} = require("../models");


const fondyPassword = 'test'

const orderBody = {
    merchant_id: '1396424',
    order_id: 'ID41234534345',
    order_desc: 'Підвіс мушля x1',
    currency: 'USD',
    amount: '1000'
}
const orderedKeys = Object.keys(orderBody).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})

const signatureRow = orderedKeys.map((v) => orderBody[v]).join('|')

// Function to update the paymentDetails based on order_id
async function updatePaymentDetails(paymentDetails) {
    try {
        // Find the order by order_id and update the paymentDetails field
        const updatedOrder = await Order.findOneAndUpdate(
            { order_id: paymentDetails.order_id },
            { $set: { paymentDetails } },
            { new: true } // To return the updated document
        );

        if (!updatedOrder) {
            console.log('Order not found');
            return null;
        }

        console.log('Payment details updated successfully:', updatedOrder);
        return updatedOrder;
    } catch (error) {
        console.error('Error updating payment details:', error);
        throw error;
    }
}

paymentRouter.get('/', async (req, res) => {
    const { data } = req.body
    console.log(data);
    // const signature = crypto.createHash('sha1')
    // signature.update(`${fondyPassword}|${signatureRow}`)
    // const { data } = await axios.post('https://pay.fondy.eu/api/checkout/url/', {
    //     request: {
    //         ...orderBody,
    //         signature: signature.digest('hex')
    //     }
    // })

    await updatePaymentDetails(data);
    return sendResponse(res, 200, true, { data }, '')
});


module.exports = paymentRouter;
