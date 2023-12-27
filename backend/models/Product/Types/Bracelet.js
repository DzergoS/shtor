import BASE_PRODUCT from "../Product";

const { Schema, model } = require('mongoose')

const braceletProductSchema = new Schema({
	...BASE_PRODUCT.schema.obj,
	price: {
		type: Number,
		required: true,
	},
	group: {
		type: String,
		default: "OBERIH",
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
		ref: "Color",
		required: true,
	}]
});

const BRACELET_PRODUCT = model('BraceletProduct', braceletProductSchema);

export default BRACELET_PRODUCT;

