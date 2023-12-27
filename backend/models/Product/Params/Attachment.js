import {model, Schema} from "mongoose";

const attachmentSchema = new Schema({
	name: {
		en: { type: String, required: true },
		ua: { type: String, required: true },
	},
})

const ATTACHMENT = model('Attachment', attachmentSchema);

export default ATTACHMENT;
