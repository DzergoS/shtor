const express = require('express');
// const db = require('./db'); 
const Product = require('./models/Product');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// process.on('SIGINT', () => {
//   console.log('Closing server and MongoDB connection');
//   server.close(() => {
//     db.close(() => {
//       console.log('Server and MongoDB connection closed');
//       process.exit(0);
//     });
//   });
// });