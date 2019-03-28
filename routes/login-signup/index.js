const router = require("express").Router();
const db = require("../../models");
const jwt = require("jwt-simple");
const config = require("../../config");
const passport = require("passport");
const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });
const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport(transport);

function tokenizer(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.secret
  );
}

router.get("/", function(req, res) {
  res.send("Welcome to the v1 routes!");
});

router.get("/all-donations", function(req, res) {
  db.Donation.find().then(dbDonations => {
    res.json(dbDonations);
  });
});
//!! gave back an empty array

//******/ NODE MAILER /******//

router.post("/create-donations", function(req, res) {
  console.log(req.body);
  //nodemailer send code
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "test12008@yahoo.com",
      pass: "root123!"
    }
  });
  const mailOptions = {
    from: `test12008@yahoo.com`,
    to: "test1208@yahoo.com",
    subject: `Donation`,
    text: `Thank you for your donation to Sure Shelter. `,
    replyTo: "test1208@yahoo.com"
  };

  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });

  db.Donation.create(req.body)
    .then(dbDonations => {
      res.json(dbDonations);
    })
    .catch(err => res.send(err));
});

//* PROTECTED *//

router.get("/protected", requireAuth, function(req, res) {
  res.send("You have been protected!");
});

//* LOGIN *//
router.post("/signin", function(req, res) {
  const { email, password } = req.body;
  // router.post("/signin", requireSignin, function(req, res) {
  console.log("HELLO")
  console.log(email)
  db.User.findOne({ email : email }).then(dbuser => {
    console.log(dbuser)
    if (dbuser === password) {
      // WEB TOKEN //
      res.json({ token: tokenizer(dbuser) });
    }
    else {
      res.status(422).send({ error: "Invalid Information" });
    }
  })
  .catch(err => {
    return next(err);
  });
});
console.log("I AM UPDATED!!!")
//* SIGN UP *//

router.post("/signup", function(req, res) {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({ firstName, lastName, email, password });
      // save the user
      user.save().then(user => {
        console.log(user);
        // respond with the success if the user existed
        res.json({ token: tokenizer(user) });
      });
    })

    .catch(err => {
      return next(err);
    });
});

module.exports = router;
