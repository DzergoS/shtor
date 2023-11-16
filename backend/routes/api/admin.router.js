const express = require('express'),
    AdminBroExpressjs = require('@admin-bro/express'),
    adminBro = require('../admin.config'),
    admin = require('../auth'),
    router = express.Router();
    

const adminRouter = AdminBroExpressjs.buildAuthenticatedRouter(
    adminBro,
    admin, router, 
    {
        resave: false,
        saveUninitialized: true,
    }
);
router.use(adminBro.options.rootPath, adminRouter);

module.exports = router;