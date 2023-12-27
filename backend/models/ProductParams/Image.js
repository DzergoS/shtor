const { Schema, model } = require('mongoose');


const imageSchema = new Schema({
	key: String,
	mimeType: String,
	bucket: String
});

const Image = model('Image', imageSchema);

module.exports = Image
