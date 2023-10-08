const express = require("express");
const router = express.Router();
const {
  getContact,
  getContactByid,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactByid);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
