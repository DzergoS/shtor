const path = require("path");
const fs = require("fs");

const checkFileExists = (req, res, next) => {
	const filePath = path.join(__dirname, '../../productPhotos', req.url);

	fs.access(filePath, fs.constants.F_OK, (err) => {
		if (err) {
			res.status(404).send(`File ${req.url} not found`);
		} else {
			next();
		}
	});
};

module.exports = checkFileExists
