const User = require('./models/User'),
    bcrypt = require('bcrypt');
require('dotenv').config();

  
const admin = {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: process.env.COOKIE_PASS,
};

module.exports = admin