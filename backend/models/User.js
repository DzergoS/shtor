const { model } = require('mongoose')

const User = model('User', {
    email: { type: String, required: true, unique: true },
    encryptedPassword: { type: String, required: true },
    role: { type: String, enum: ['admin', 'restricted'], required: true },
});


module.exports = User;