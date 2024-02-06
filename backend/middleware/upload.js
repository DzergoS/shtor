const multer = require("multer");

const whitelist = [
	'image/png',
	'image/jpeg',
	'image/jpg',
]

module.exports = multer({
  storage: multer.diskStorage({
    destination: '../productPhotos/',
    filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
		req.fileValidationError = 'File should be an image with png/jpeg/jpg format';
		return cb(null, false);
    }

    cb(null, true)
  }
})
