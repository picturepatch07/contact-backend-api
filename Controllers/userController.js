const express = require("express");
const asyncHandler = require("express-async-handler");

//@desc Register user
//@route POST /api/user/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
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
