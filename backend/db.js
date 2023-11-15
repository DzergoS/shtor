const mongoose = require('mongoose');
require('dotenv').config();


const connectToDB = async () => {
  try {
    const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.moffsmc.mongodb.net/shtor?retryWrites=true&w=majority`;
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    return mongoose.connection.useDb('products');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = connectToDB;