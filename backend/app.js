const express = require('express');
const db = require('./db'); 
const Product = require('./models/Product');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on('close', async () => {
  await db.close();
  console.log('MongoDB connection closed.');
});
