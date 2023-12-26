const express = require('express'),
  adminRouter = express.Router();


adminRouter.get('/', (req, res) => {
    res.status(200).send('Welcome to admin');
})


module.exports = adminRouter;