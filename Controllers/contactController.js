const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.json(contact);
});

//@desc get contacts
//@route GET /api/contacts/":id"
//@access Public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc upate contacts
//@route PUT /api/contacts/":id"
//@access Public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});

//@desc delete contacts
//@route DELETE /api/contacts/":id"
//@access Public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await contact.remove();
  res.send(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
