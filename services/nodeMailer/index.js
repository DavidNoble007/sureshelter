// !! Node Mailer

const nodemailer = require("nodemailer");
// let transporter = nodemailer.createTransport(options[, defaults])

//* options – is an object that defines connection data (see below for details)
//* defaults – is an object that is going to be merged into every message object. This allows you to specify shared options, for example to set the same from address for every message

//!! Back End Node Mailer


nodemailer.createTransport({
  host: "",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "",
    pass: ""
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
