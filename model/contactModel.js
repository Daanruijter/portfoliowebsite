const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    // required: true,
    // unique: true,
  },
  phoneNumber: {
    type: String,
    unique: false,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: false,
  },
  country: {
    type: String,
    // required: true,
    unique: false,
  },
  company: {
    type: String,
    // required: true,
    unique: false,
  },
  message: {
    type: String,
    // required: true,
    unique: false,
  },
});

module.exports = mongoose.model("contactdata", contactSchema);
