const express = require("express");
const router = express.Router();
const contactModel = require("../model/contactModel");

router.post("/", (req, res) => {
  const { name, phoneNumber, email, country, company, message } = req.body;

  const newContactData = new contactModel({
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    country: country,
    company: company,
    message: message,
  });

  newContactData.save();
  res.send("contactData saved");
});

module.exports = router;
