const express = require('express'),
  path = require('path'),
  HTTP = require('http'),
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  connectToDB = require('./config/db'),
  genericRouter = require('./routes/index')

require('dotenv').config();


const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;


const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN,
  credentials: true,
  optionSuccessStatus: 200,
}

const startServer = async () => {
  const app = express();

  app.use(cors(corsOptions))
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use('/api', genericRouter);

  app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle other routes by serving the index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });

  const db = await connectToDB();
  const server = HTTP.createServer(app);

  const WebServer = server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  WebServer.on('close', async () => {
    try {
      await db.close();
      console.log('MongoDB connection closed.');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
    }
  });
}

startServer();
