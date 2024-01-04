const path = require("path");
const fs = require("fs");

const checkFileExists = (req, res, next) => {
	const filePath = path.join(__dirname, '../../productPhotos', req.url);

	fs.access(filePath, fs.constants.F_OK, (err) => {
		if (err) {
			// File does not exist, send 404
			res.status(404).send('File not found');
		} else {
			// File exists, continue to serve it
			next();
		}
	});
};

module.exports = checkFileExists
