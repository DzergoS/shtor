const express = require('express'),
    genericRouter = express.Router(),
    authRoutes = require('./auth'),
    authMiddleware = require("./../middleware/auth"),
    adminRoutes = require('./admin');
    

genericRouter.use('/auth', authRoutes);
genericRouter.use('/admin', authMiddleware);
genericRouter.use('/admin', adminRoutes);

module.exports = genericRouter;