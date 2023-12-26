const express = require('express'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  authRouter = express.Router(),
  User = require("./../models/User");

// Register
// authRouter.post("/register", async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       if (!(email && password)) {
//         res.status(400).send("All input is required");
//       }
//       const createdUser = await User.findOne({ email });
  
//       if (createdUser) {
//         return res.status(409).send("User Already Exist. Please Login");
//       }
  
//       encryptedPassword = await bcrypt.hash(password, 10);
  
//       const user = await User.create({
//         email: email.toLowerCase(),
//         password: encryptedPassword,
//       });
  
//       const token = jwt.sign(
//         { user_id: user._id, email },
//         process.env.JWT_SECRET,
//         {
//           expiresIn: "2h",
//         }
//       );
//       user.token = token;
  
//       res.status(201).json(user);
//     } catch (err) {
//       console.log(err);
//     }
//   });


authRouter.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
            process.env.JWT_SECRET,
          {
            expiresIn: "2h",
          }
        );
        res.cookie('access_token', token, { httpOnly: true });

        res.status(200).json(user);
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
});


module.exports = authRouter;