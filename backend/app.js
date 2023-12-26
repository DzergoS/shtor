const express = require('express'),
// session = require('express-session'),
  genericRouter = require('./routes/index'),
  connectToDB = require('./config/db'),
  path = require('path');
require('dotenv').config();


const PORT = process.env.PORT || 3001;


const startServer = async () => {
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET,
  //     resave: false,
  //     saveUninitialized: true,
  //   })
  // );

  app.use('/', genericRouter);

  // app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
  // app.use('/uploads', express.static('uploads'));

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