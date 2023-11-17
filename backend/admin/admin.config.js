const AdminBro = require('admin-bro'),
    uploadFeature = require('@admin-bro/upload'),
    UserResource = require('./resources/UserResource'),
    // BaseProductResource = require('./resources/BaseProductResource'),
  {
    BaseProduct,
    AttachmentProduct,
    BraceletProduct,
    ShellProduct
  } = require('../models/Products');

AdminBro.registerAdapter(require('@admin-bro/mongoose'));



const adminBro = new AdminBro({
  resources: [
    UserResource,
    {
      resource: BaseProduct,
      options: {
        properties: {
          images: { isVisible: false }
        },
      },
      features: [uploadFeature({
        provider: { local: { bucket: 'public/uploads' } },
        properties: {
          // file: 'images.file',
          // filePath: 'images.path',
          // filename: 'images.filename',
          // filesToDelete: 'images.toDelete',
          key: 'images.key',
          mimeType: 'images.mimeType'
        },
        validation: {
          mimeTypes: ['image/jpeg', 'image/png'],
        },
        multiple: true
      })],
  },
    AttachmentProduct,
    BraceletProduct,
    ShellProduct,
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'Shtor',
  },
});

module.exports = adminBro;