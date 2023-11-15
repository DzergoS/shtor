const AdminBro = require('admin-bro'),
    bcrypt = require('bcrypt');
    User = require('./models/User'),
  {
    AttachmentProduct,
    NormalProduct,
    BraceletProduct,
    ShellProduct
  } = require('./models/Products');

AdminBro.registerAdapter(require('@admin-bro/mongoose'));

const haveAccess = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'

const adminBro = new AdminBro({
  resources: [
    { resource: User,
      options: {
        parent: { name: 'Authentication' },
        properties: {
          encryptedPassword: { isVisible: false },
          password: {
            type: 'string',
            isVisible: {
              list: false, edit: true, filter: false, show: false,
            },
          },
        },
        actions: {
          new: {
            before: async (request) => {
              if(request.payload.password) {
                request.payload = {
                  ...request.payload,
                  encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                  password: undefined,
                }
              }
              return request
            },
          },
          list: { isAccessible: haveAccess },
          edit: { isAccessible: haveAccess },
          delete: { isAccessible: haveAccess },
          new: { isAccessible: haveAccess },
        }
      }
    },
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