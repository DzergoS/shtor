const AdminBro = require('admin-bro'),
    UserResource = require('./resources/UserResource'),
    BaseProductResource = require('./resources/BaseProductResource'),
  {
    ProductColor,
    AttachmentProduct,
    BraceletProduct,
    ShellProduct
  } = require('../models/Products');

AdminBro.registerAdapter(require('@admin-bro/mongoose'));



const adminBro = new AdminBro({
  resources: [
    UserResource,
    BaseProductResource,
    ProductColor,
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