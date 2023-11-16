const AdminBro = require('admin-bro'),
    uploadFeature = require('@admin-bro/upload'),
    UserResource = require('./resources/UserResource'),
  {
    AttachmentProduct,
    NormalProduct,
    BraceletProduct,
    ShellProduct
  } = require('../models/Products');

AdminBro.registerAdapter(require('@admin-bro/mongoose'));



const adminBro = new AdminBro({
  resources: [
    UserResource,
    AttachmentProduct,
    NormalProduct,
    BraceletProduct,
    ShellProduct
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'Shtor',
  },
});

module.exports = adminBro;