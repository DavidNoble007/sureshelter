const router = require("express").Router();
const loginRoutes = require("./login-signup");

router.use("/v1", loginRoutes);

module.exports = router;