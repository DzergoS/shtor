const express = require('express'),
  adminRouter = express.Router(),
  authMiddleware = require('./../middleware/auth'),
  sendResponse = require('./../shortcuts/response');


adminRouter.use(authMiddleware);

adminRouter.get('/', (req, res) => {
  return sendResponse(res, 200, true, { email: req.user.email }, "");
})


module.exports = adminRouter;