//@desc Get all conatcts
//@route GET /api/contacts
//@acess public

const getContact = (req, res) => {
  res.status(200).json({message: "Get all contacts"});
};

//@desc Get  conatcts
//@route GET /api/contacts/id
//@acess public

const getContactByid = (req, res) => {
  res.status(200).json({message: ` Get contact for ${req.params.id}`});
};

//@desc Create new conatcts
//@route POST /api/contacts
//@acess public

const createContact = (req, res) => {
  console.log("The request for body is : ", req.body);
  res.status(201).json({message: "Create contacts"});
};

//@desc Update conatcts
//@route PUT /api/contacts/id
//@acess public

const updateContact = (req, res) => {
  res.status(200).json({message: ` Update contack for ${req.params.id}`});
};

//@desc Delete conatcts
//@route Delete /api/contacts/id
//@acess public

const deleteContact = (req, res) => {
  res.status(200).json({message: ` Delete contack for ${req.params.id}`});
};

module.exports = {
  getContact,
  createContact,
  getContactByid,
  updateContact,
  deleteContact,
};
