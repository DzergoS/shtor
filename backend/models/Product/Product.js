import { Schema, model } from 'mongoose';

const baseProductSchema = new Schema({
	name: {
		en: { type: String, default: 'Product name' },
		ua: { type: String, default: 'Назва товару' }
	},
	description: {
		en: { type: String, default: 'Product description' },
		ua: { type: String, default: 'Опис товару' }
	},
});

const BASE_PRODUCT = model('BaseProduct', baseProductSchema);

export default BASE_PRODUCT;
