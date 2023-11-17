const uploadFeature = require('@admin-bro/upload'),
    { BaseProduct } = require('../../models/Products');

module.exports = {
    resource: BaseProduct,
    options: {
      properties: {
        images: { isVisible: false }
      },
    },
    features: [uploadFeature({
      provider: { local: { bucket: 'public/uploads' } },
      properties: {
        file: 'images.file',
        filePath: 'images.path',
        filename: 'images.filename',
        filesToDelete: 'images.toDelete',
        key: 'images.key',
        mimeType: 'images.mimeType'
      },
      validation: {
        mimeTypes: ['image/jpeg', 'image/png'],
      },
      multiple: true
    })],
}