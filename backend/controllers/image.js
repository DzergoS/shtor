const sendResponse = require('./../utils/response'),
    { Product } = require("../models"),
    { deleteImage } = require('../utils/storage');


const createProductImage = async (req, res) => {
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


const addVariationImage = async (req, res) => {
  try {
    if (req.fileValidationError) {
      return sendResponse(res, 400, false, {}, req.fileValidationError)
    }

    const { id, variationIndex } = req.params
    const file = req.file

    if (!file) {
      return sendResponse(res, 400, false, {}, 'Image file not found')
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $push: { [`variations.${variationIndex}.images`]: file.filename } },
      { new: true }
  )

    return sendResponse(res, 200, true, {updatedProduct}, `Image ${file.filename} uploaded successfully`)
  } catch (error) {
    return sendResponse(res, 500, false, {}, 'Error uploading an image')
  }
}

const editVariationImage = async (req, res) => {
  try {
    if (req.fileValidationError) {
        return sendResponse(res, 400, false, {}, req.fileValidationError)
    }

    const { id, variationIndex, imageName } = req.params
    const file = req.file
    

    if (!file) {
        return sendResponse(res, 400, false, {}, 'Image file not found')
    }

    deleteImage(imageName)

    await Product.findOneAndUpdate(
      { _id: id, [`variations.${variationIndex}.images`]: imageName },
      { $set: { [`variations.${variationIndex}.images.$`]: file.filename } },
      { new: true }
    )

    return sendResponse(res, 200, true, {}, `Image changed on ${file.filename} successfully`)
  } catch (error) {
    return sendResponse(res, 500, false, {}, 'Error changing an image')
  }
}

const deleteVariationImage = async (req, res) => {
  try{
      const { id, variationIndex, imageName } = req.params 

      await Product.findOneAndUpdate(
        { _id: id },
        { $pull: { [`variations.${variationIndex}.images`]: imageName } },
        { new: true },
      );

      deleteImage(imageName)

      return sendResponse(res, 200, true, {}, `Image ${imageName} deleted successfully`)
  } catch (error) {
      return sendResponse(res, 500, false, {}, 'Error deleting an image')
  }
}




module.exports = {
	  createProductImage,
    editProductImage,
    deleteProductImage,
    addVariationImage,
    editVariationImage,
    deleteVariationImage
}
