const BaseProduct = require('./Base'),
	{ Schema, model } = require('mongoose');

	
const braceletProductSchema = new Schema({
	...BaseProduct.schema.obj,
	price: {
		en: { type: Number, required: true },
		ua: { type: Number, required: true },
	},
	variations: [{
		image: {
			type: Schema.Types.ObjectId,
			ref: "Image",
			required: true,
		},
		size: {
			type: "String",
			required: true,
		},
	}],
	color: [{
		type: Schema.Types.ObjectId,
		ref: "ProductColor",
		required: true,
	}]
});

const BraceletProduct = model('BraceletProduct', braceletProductSchema);

module.exports = BraceletProduct;

