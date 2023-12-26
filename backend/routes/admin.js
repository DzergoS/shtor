const express = require('express'),
  adminRouter = express.Router();


adminRouter.post('/', (req, res) => {
    res.status(200).send('Welcome to admin');
})


module.exports = adminRouter;