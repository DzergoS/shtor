const { Schema, model } = require('mongoose')


const baseProductSchema = new Schema({
	name: {
		en: { type: String, default: 'Product name' },
		ua: { type: String, default: 'Назва товару' }
	},
	description: {
		en: { type: String, default: 'Product description' },
		ua: { type: String, default: 'Опис товару' }
	},
	group: {
		type: String,
		default: "OBJECT",
	},
});

const BaseProduct = model('BaseProduct', baseProductSchema);

module.exports = BaseProduct;
