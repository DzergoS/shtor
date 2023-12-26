const express = require('express'),
    authRoutes = require('./auth'),
    genericRouter = express.Router();
    

genericRouter.use('/', authRoutes);

module.exports = genericRouter;