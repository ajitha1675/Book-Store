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
router.post("/api/v1/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if username exists
    const existingUser = await User.findOne({ username: username.trim() });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { username: existingUser.username, role: existingUser.role },
      process.env.JWT_SECRET || "bookstore123",
      { expiresIn: "30d" }
    );

    // Respond with success
    return res.status(200).json({
      id: existingUser._id, // Use `_id` instead of `id` for MongoDB
      role: existingUser.role,
      token: token,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
