const express = require("express");
const sessions = express.Router();

// new session (login)
//sessions.get('/new')

// create session
sessions.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = sessions;
