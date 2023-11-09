const express = require('express');
const db = require('./db'); 
const Product = require('./models/Product');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const { createAgent } = require('@forestadmin/agent');
const { createMongooseDataSource } = require('@forestadmin/datasource-mongoose');
createAgent({
  authSecret: process.env.FOREST_AUTH_SECRET,
  envSecret: process.env.FOREST_ENV_SECRET,
  isProduction: process.env.NODE_ENV === 'production',

})
  .addDataSource(createMongooseDataSource(db))
  .mountOnExpress(app)
  .start();


const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on('close', async () => {
  await db.close();
  console.log('MongoDB connection closed.');
});