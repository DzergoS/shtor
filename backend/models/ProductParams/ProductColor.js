const { Schema, model } = require('mongoose');

const colorSchema = new Schema({
	name: {
		en: { type: String, required: true },
		ua: { type: String, required: true },
	}
})

const ProductColor = model('ProductColor', colorSchema);

module.exports = ProductColor;
