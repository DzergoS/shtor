const express = require('express'),
    genericRouter = express.Router(),
    authRoutes = require('./auth'),
    adminRoutes = require('./admin'),
    productRoutes = require('./api/products');
    

genericRouter.use('/auth', authRoutes);
genericRouter.use('/admin', adminRoutes);
genericRouter.use('/api/products', productRoutes);

module.exports = genericRouter;