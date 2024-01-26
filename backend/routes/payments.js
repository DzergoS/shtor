const express = require('express'),
    paymentRouter = express.Router(),
    sendResponse = require('../utils/response');


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

paymentRouter.get('/', async (req, res) => {
    data = req.body
    console.log(data);
    // const signature = crypto.createHash('sha1')
    // signature.update(`${fondyPassword}|${signatureRow}`)
    // const { data } = await axios.post('https://pay.fondy.eu/api/checkout/url/', {
    //     request: {
    //         ...orderBody,
    //         signature: signature.digest('hex')
    //     }
    // })

    return sendResponse(res, 200, true, { data }, '')
});


module.exports = paymentRouter;
