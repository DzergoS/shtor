const express = require('express'),
    genericRouter = express.Router(),
	authMiddleware = require('../middleware/auth'),
    authRoutes = require('./auth'),
    adminRoutes = require('./admin'),
    productRoutes = require('./products'),
	orderRoutes = require('./orders'),
    subscriberRoutes = require('./subscribers')


genericRouter.use('/auth', authRoutes);
genericRouter.use('/admin', authMiddleware, adminRoutes);

genericRouter.use('/products', productRoutes);
genericRouter.use('/orders', orderRoutes);
genericRouter.use('/subscribe', subscriberRoutes)

module.exports = genericRouter;
