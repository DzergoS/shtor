const express = require('express'),
    AdminBroExpressjs = require('@admin-bro/express'),
    // apiRoutes = require('./api'),
    adminBro = require('../admin/admin.config'),
    admin = require('../auth'),
    router = express.Router();


// router.use('/', apiRoutes);

const adminRouter = AdminBroExpressjs.buildRouter(adminBro);

// const adminRouter = AdminBroExpressjs.buildAuthenticatedRouter(
//     adminBro,
//     admin, router, 
//     {
//         resave: false,
//         saveUninitialized: false,
//     }
// );
router.use(adminBro.options.rootPath, adminRouter);

module.exports = router;