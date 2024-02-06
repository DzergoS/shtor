const path = require("path");
const fs = require("fs");

const imageDirectory = path.join(__dirname, '../../productPhotos/');


const checkFileExists = (req, res, next) => {
	const filePath = path.join(imageDirectory, req.url);

	fs.access(filePath, fs.constants.F_OK, (err) => {
		if (err) {
			res.status(404).send(`File ${req.url} not found`);
		} else {
			next();
		}
	});
};


const deleteImage = (filename) => {
	fs.unlink(path.join(imageDirectory, filename), (err) => {
		if (err) {
			throw new Error(`Error deleting image ${filename}:`, err)
		}
	});
};


module.exports = { 
	checkFileExists,
	deleteImage
};