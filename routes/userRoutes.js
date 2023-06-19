const express = require("express");

const router = express.Router();

// router.post("/register", (req, res) => {
//   res.json({ message: "Register the user" });
// });

router.route("/register").post((req, res) => {
  res.json({ message: "Register the user" });
});

router.route("/login").post((req, res) => {
  res.json({ message: "Login User" });
});

router.route("/current").get((req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = router;
