const express = require('express'),
    genericRouter = express.Router(),
    authRoutes = require('./auth'),
    adminRoutes = require('./admin'),
    productRoutes = require('./api/products');
    

genericRouter.use('/api/auth', authRoutes);
genericRouter.use('/api/admin', adminRoutes);
genericRouter.use('/api/products', productRoutes);

module.exports = genericRouter;