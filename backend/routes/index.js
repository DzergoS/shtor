const express = require('express'),
    genericRouter = express.Router(),
    authRoutes = require('./auth'),
    adminRoutes = require('./admin');
    

genericRouter.use('/auth', authRoutes);
genericRouter.use('/admin', adminRoutes);

module.exports = genericRouter;