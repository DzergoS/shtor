const { Schema, model } = require('mongoose');


const orderSchema = new Schema({
	client: {
		type: String,
		required: true,
	},
	sum: {
		type: Number,
		required: true,
	},
	products: {
		type: Array,
		required: true,
	},
});

const Order = model('Order', orderSchema);

module.exports = Order
