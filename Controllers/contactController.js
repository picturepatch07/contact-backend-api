//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
  res.send("Get all contacts");
};

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContact = (req, res) => {
  res.send("Create a new contact");
};

//@desc get contacts
//@route GET /api/contacts/":id"
//@access Public

const getContact = (req, res) => {
  res.send(`Get contact with id ${req.params.id}`);
};

//@desc upate contacts
//@route PUT /api/contacts/":id"
//@access Public

const updateContact = (req, res) => {
  res.send(`Update contact with id ${req.params.id}`);
};

//@desc delete contacts
//@route DELETE /api/contacts/":id"
//@access Public

const deleteContact = (req, res) => {
  res.send(`Delete contact with id ${req.params.id}`);
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
