import BASE_PRODUCT from "../Product";

const { Schema, model } = require('mongoose')

const simpleProductsSchema = new Schema({
	...BASE_PRODUCT.schema.obj,
	group: {
		type: String,
		default: "OBJECT",
	},
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

const SIMPLE_PRODUCT = model('SimpleProduct', simpleProductsSchema);

export default SIMPLE_PRODUCT;

