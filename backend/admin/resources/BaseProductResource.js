const path = require('path'),
    uploadFeature = require('@admin-bro/upload'),
    { BaseProduct } = require('../../models/Products');
    require('dotenv').config();
    

module.exports = {
  resource: BaseProduct,
  options: {
    properties: {
      __t: { isVisible: false },
    },
  },
  features: [uploadFeature({
    properties: {
      file: 'images.file',
      // filePath: 'images.filePath',
      // filename: 'images.filename', 
      // filesToDelete: 'images.filesToDelete',
      key: 'images.key',
      mimeType: 'images.mimeType',
      bucket: 'images.bucket',
    },
    // multiple: true,
    provider: {
      aws: {
        region: `${process.env.AWS_REGION}`,
        bucket: `${process.env.S3_BUCKET_NAME}`,
        secretAccessKey: `${process.env.SECRET_KEY}`,
        accessKeyId: `${process.env.ACCESS_KEY}`,
        expires: 0,
      },
    },
    validation: {
      mimeTypes: ['image/jpeg', 'image/png'],
    }
  })],
}
