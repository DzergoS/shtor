const BaseProduct = require('./Base'),
	{ Schema, model } = require('mongoose');


const regularProductSchema = new Schema({
	...BaseProduct.schema.obj,
	size: {
		type: String,
		required: true,
	},
	images: [{
		type: Schema.Types.ObjectId,
		ref: "Image",
		required: true,
	}],
	variations: [{
		attachment: {
			type: Schema.Types.ObjectId,
			ref: "Attachment",
			required: false,
		},
		price: {
			type: Number,
			required: true,
		}
	}]
});

const RegularProduct = model('RegularProduct', regularProductSchema);

module.exports = RegularProduct;
