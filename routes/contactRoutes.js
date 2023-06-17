const express = require("express");
const router = express.Router();

// Import the contact controller
router.route("/").get((req, res) => {
  res.send("Get all contacts");
});

router.route("/").post((req, res) => {
  res.send("Create a new contact");
});

router.route("/:id").get((req, res) => {
  res.send(`Get contact with id ${req.params.id}`);
});

router.route("/:id").put((req, res) => {
  res.send(`Update contact with id ${req.params.id}`);
});

router.route("/:id").delete((req, res) => {
  res.send(`Delete contact with id ${req.params.id}`);
});

module.exports = router;
