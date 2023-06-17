const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler((req, res) => {
  res.send("Get all contacts");
});

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler((req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  res.send("Create a new contact");
});

//@desc get contacts
//@route GET /api/contacts/":id"
//@access Public

const getContact = asyncHandler((req, res) => {
  res.send(`Get contact with id ${req.params.id}`);
});

//@desc upate contacts
//@route PUT /api/contacts/":id"
//@access Public

const updateContact = asyncHandler((req, res) => {
  res.send(`Update contact with id ${req.params.id}`);
});

//@desc delete contacts
//@route DELETE /api/contacts/":id"
//@access Public

const deleteContact = asyncHandler((req, res) => {
  res.send(`Delete contact with id ${req.params.id}`);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
