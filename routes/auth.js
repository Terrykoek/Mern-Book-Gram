const express = require("express");
const router = express.Router();

//import controller
const { googlelogin } = require("../controllers/auth");

router.post("/googlelogin", googlelogin);

module.exports = router;
