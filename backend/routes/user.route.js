const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Sign-up
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // Check if username length is more than 4
    if (username.length <= 4) {
      return res.status(400).json({
        message: "Username length should be greater than 4",
      });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Check if password length is greater than 5
    if (password.length <= 5) {
      return res.status(400).json({
        message: "Password length should be greater than 5",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password,
      address,
    });

    await newUser.save();
    return res.status(200).json({
      message: "Signup successful",
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

//sign-in
router.post("/api/signin", async (req, res) => {
   try {
       const{ username, password} = req.body;

       const existingUsername = await User.findOne({username});
       if(!existingUsername){
        res.status(400).json({
          message: "Invalid credentials"
        })
       }

       await bcrypt.compare(password, existingUsername.password,(err, data) =>{
        if(!data){
          const authClaims = [
            {name:existingUsername.username},
            {role: existingUsername.role},
          ]
          const token = jwt.sign({
            authClaims}, "bookstore123", {expiresIn: "30d"})
          res.status(200).json({
            id: existingUsername.id, 
            role: existingUsername.role, 
            token: token, 
          });
        }
        else{
          res.status(400).json({message: "Invalid credentials"});
        }
       });
   } catch (error) {
      res.status(500).json({
        message:"Internal server error"
      });
   }
});
module.exports = router;
