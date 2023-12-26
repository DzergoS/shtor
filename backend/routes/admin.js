const express = require('express'),
  adminRouter = express.Router(),
  authMiddleware = require('./../middleware/auth')


adminRouter.use(authMiddleware);

adminRouter.get('/', (req, res) => {
    res.status(200).send('Welcome to admin');
})


module.exports = adminRouter;