var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var DonationSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  firstname: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  lastname: {
    type: String,
    trim: true,
    required: "Last Name is Required"
    // validate: [
    //   function(input) {
    //     return input.length >= 6;
    //   },
    //   "Password should be longer."
    // ]
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  donationType: {
    type: String,
    trim: true,
    required: "Please enter your donation"
  },

  donationAmount: {
    type: String,
    trim: true,
    required: "Please enter a valid amount"
  }

  // notes: [
  //   {
  //     // Store ObjectIds in the array
  //     type: Schema.Types.ObjectId,
  //     // The ObjectIds will refer to the ids in the Note model
  //     ref: "Note"
  //   }
  // ]
});

const DonationModel = mongoose.model("Donation", DonationSchema);

module.exports = DonationModel;
