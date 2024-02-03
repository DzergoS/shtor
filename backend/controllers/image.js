const sendResponse = require('./../utils/response');

const uploadImage = async (req, res) => {
	try {
		// Check for errors in req.file
		if (req.file) {
			// If there is no error, send a success response
			sendResponse(res, 200, true, { file: req.file }, 'File uploaded successfully');
		} else {
			// If there is an error, send an error response
			sendResponse(res, 400, false, {}, 'Error uploading file');
		}
	} catch (error) {
		// Handle any unexpected errors
		console.error('Error handling image upload:', error);
		sendResponse(res, 500, false, {}, 'Internal Server Error');
	}
};


module.exports = {
	uploadImage,
};
