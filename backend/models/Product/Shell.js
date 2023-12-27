const BaseProduct = require('./Base'),
	{ Schema, model } = require('mongoose');


const shellProductsSchema = new Schema({
	...BaseProduct.schema.obj,
	variations: [{
		image: {
			type: Schema.Types.ObjectId,
			ref: "Image",
			required: true,
		},
		size: {
			type: String,
			required: true,
		},
		price: {
			en: { type: Number, required: true },
			ua: { type: Number, required: true },
		}
	}]
});

const ShellProduct = model('ShellProduct', shellProductsSchema);

module.exports = ShellProduct;

