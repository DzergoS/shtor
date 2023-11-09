const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:\
${process.env.DB_PASS}@\
${process.env.DB_CLUSTER}.moffsmc.mongodb.net/\
?retryWrites=true&w=majority`; 

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;