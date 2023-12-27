const { Schema, model } = require('mongoose');

const attachmentSchema = new Schema({
	name: {
		en: { type: String, required: true },
		ua: { type: String, required: true },
	},
})

const Attachment = model('Attachment', attachmentSchema);

module.exports = Attachment;
