import BASE_PRODUCT from "../Product";

const { Schema, model } = require('mongoose')

const ShellProductsSchema = new Schema({
	...BASE_PRODUCT.schema.obj,
	group: {
		type: String,
		default: "SHELL",
	},
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
			type: Number,
			required: true,
		}
	}]
});

const SHELL_PRODUCT = model('ShellProduct', ShellProductsSchema);

export default SHELL_PRODUCT;

