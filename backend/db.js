const mongoose = require('mongoose');
require('dotenv').config();


const connectToDB = async () => {
  try {
    const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.wbvi7g9.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(
      MONGO_URI,
      {
        dbName: 'shtor'
      }
    );
    console.log('Connected to MongoDB');
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = connectToDB;