import {model, Schema} from "mongoose";

export const imageSchema = new Schema({
	key: String,
	mimeType: String,
	bucket: String,
	// filename: String,
	// filePath: String,
	// filesToDelete: String
});

const IMAGE = model('Image', imageSchema);

export default IMAGE
