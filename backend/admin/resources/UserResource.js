const bcrypt = require('bcrypt'),
  User = require('../../models/User');

const haveAccess = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'


module.exports = { resource: User,
    options: {
      parent: { name: 'Admin Users' },
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
}