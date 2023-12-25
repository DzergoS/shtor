const express = require('express'),
  // session = require('express-session'),
  path = require('path'),
  connectToDB = require('./db');
require('dotenv').config();


const PORT = process.env.PORT || 3001;


const startServer = async () => {
  const app = express();
  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET,
  //     resave: false,
  //     saveUninitialized: true,
  //   })
  // );

  // app.use('/', router);

  // app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
  app.use('/uploads', express.static('uploads'));

  const db = await connectToDB();

  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  server.on('close', async () => {
    try {
      await db.close();
      console.log('MongoDB connection closed.');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
    }
  });
}

startServer();