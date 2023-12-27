import {model, Schema} from "mongoose";

export const colorSchema = new Schema({
	name: {
		en: { type: String, required: true },
		ua: { type: String, required: true },
	}
})

const COLOR = model('Color', colorSchema);

export default COLOR;
