const multer = require("multer");

const storage = multer.diskStorage({
	destination: '../productPhotos/',
	filename: (req, file, cb) => {
		const timestamp = Date.now();
		const originalname = file.originalname;
		const extension = originalname.split('.').pop();
		const uniqueFilename = `${timestamp}-${Math.floor(Math.random() * 1000)}.${extension}`;
		cb(null, uniqueFilename);
	},
});

const upload = multer({ storage });

module.exports = upload;
