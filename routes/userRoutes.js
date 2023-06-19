const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../Controllers/userController");

// router.post("/register", (req, res) => {
//   res.json({ message: "Register the user" });
// });

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").get(currentUser);

module.exports = router;
