const sendResponse = require('./../utils/response'),
    { Product } = require("../models"),
    { deleteImage } = require('../utils/storage');


const uploadProductImage = async (req, res) => {
    try {
      if (req.fileValidationError) {
        return sendResponse(res, 400, false, {}, req.fileValidationError)
      }
  
      const { id } = req.params
      const file = req.file
  
      if (!file) {
        return sendResponse(res, 400, false, {}, 'Image file not found')
      }
  
      await Product.findByIdAndUpdate(
        id,
        { $push: { images: file.filename } },
        { new: true }
      )
  
      return sendResponse(res, 200, true, {}, `Image ${file.filename} uploaded successfully`)
    } catch (error) {
      return sendResponse(res, 500, false, {}, 'Error uploading an image')
    }
}

const editProductImage = async (req, res) => {
  try {
    if (req.fileValidationError) {
        return sendResponse(res, 400, false, {}, req.fileValidationError)
    }

    const { id, imageName } = req.params
    const file = req.file
    

    if (!file) {
        return sendResponse(res, 400, false, {}, 'Image file not found')
    }

    deleteImage(imageName)

    await Product.findOneAndUpdate(
        { _id: id, 'images': imageName },
        { $set: { 'images.$': file.filename } },
        { new: true }
    )

    return sendResponse(res, 200, true, {}, `Image changed on ${file.filename} successfully`)
  } catch (error) {
    return sendResponse(res, 500, false, {}, 'Error changing an image')
  }
}

const deleteProductImage = async (req, res) => {
    try{
        const { id, imageName } = req.params 

        await Product.findOneAndUpdate(
            { _id: id },
            { $pull: { images: imageName } },
            { new: true }
        );

        deleteImage(imageName)

        return sendResponse(res, 200, true, {}, `Image ${imageName} deleted successfully`)
    } catch (error) {
        return sendResponse(res, 500, false, {}, 'Error deleting an image')
    }
}



module.exports = {
	uploadProductImage,
    editProductImage,
    deleteProductImage,
}
