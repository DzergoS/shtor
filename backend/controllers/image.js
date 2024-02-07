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


const createSeashellImages = async (req, res) => {
  try {
    const { id } = req.params
    const files = req.files

    if (!files || files.length !== 2) {
      return sendResponse(res, 400, false, {}, 'Error uploading images. Please, ensure 2 files given')
    }

    const fileNames = files.map(file => file.filename)
    await Product.findByIdAndUpdate(
      id,
      { $push: { seashells: fileNames }},
      { new: true }
    );

    return sendResponse(res, 200, true, {}, `Images was uploaded successfully`)
  } catch (error) {
    return sendResponse(res, 500, false, {error}, 'Error uploading an image')
  }
}

const editSeashellImages = async (req, res) => {
  try {
    const { id, seashellIndex } = req.params
    const files = req.files
    
    if (!files || files.length !== 2) {
      return sendResponse(res, 400, false, {}, 'Error uploading images. Please, ensure 2 files given')
    }

    const product = await Product.findById(id)
    const imagesToDelete = product.seashells[seashellIndex]
    imagesToDelete.forEach(filename => {
      deleteImage(filename)
    })
    
    const fileNames = files.map(file => file.filename)
    await Product.findByIdAndUpdate(
      id,
      { $set: { [`seashells.${seashellIndex}`]: fileNames }},
      { new: true }
    );

    return sendResponse(res, 200, true, {}, `Images changed successfully`)
  } catch (error) {
    return sendResponse(res, 500, false, {}, 'Error changing an image')
  }
}

const deleteSeashellImages = async (req, res) => {
  try{
      const { id, seashellIndex } = req.params 

      const product = await Product.findById(id)
      const imagesToDelete = product.seashells[seashellIndex]
      imagesToDelete.forEach(filename => {
        deleteImage(filename)
      })
  
      product.seashells.splice(seashellIndex, 1);
      await product.save();

      return sendResponse(res, 200, true, {}, `Images deleted successfully`)
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
    deleteVariationImage,
    createSeashellImages,
    editSeashellImages,
    deleteSeashellImages
}
