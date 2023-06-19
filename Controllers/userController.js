const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register user
//@route POST /api/user/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable && userAvailable.email === email) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hashing the password
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password /*: hashedPassword*/,
  });
  console.log(`User created with ${user}`);
  if (user) {
    res.status(201).jsin({ _is: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json();
});

//@desc Loginn user
//@route POST /api/user/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//@desc Current user inforemation
//@route GET /api/user/current
//@access Private

const currentUser = asyncHandler(async (re, res) => {
  res.json({ message: "current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
