const express = require('express'),
  // session = require('express-session'),
  connectToDB = require('./config/db'),
  genericRouter = require('./routes/index'),
  // path = require('path');
  cookieParser = require('cookie-parser');
require('dotenv').config();


const PORT = process.env.PORT || 3001;


const startServer = async () => {
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
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