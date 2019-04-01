require("dotenv").config();

// Express initialization
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;
const nodemailer = require("nodemailer");

// Passport configuration
require("./services/passport");

// Serve Static
app.use(express.static("app/build"));

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("morgan")("dev"));

app.use(require("./routes/login-signup/index"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/app/build/index.html"));
// });

// Mongoose Connection
const db = require("./config/connection");

db(process.env.MONGODB_URI || "mongodb://localhost/sureshelter");

app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
