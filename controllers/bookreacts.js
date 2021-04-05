const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Bookreacts = require("../models/bookreacts");

//create route
router.post("/", (req, res) => {
  Bookreacts.create(req.body, (err, createdBookreact) => {
    res.json(createdBookreact);
  });
});

//read route
router.get("/:email", (req, res) => {
  Bookreacts.find({ email: req.params.email }, (err, foundBookreacts) => {
    res.json(foundBookreacts);
  });
});

//update route
router.put("/:id", (req, res) => {
  Bookreacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBookreact) => {
      res.json(updatedBookreact);
    }
  );
});

//delete route
router.delete("/:id", (req, res) => {
  Bookreacts.findByIdAndRemove(req.params.id, (err, deletedBookreact) => {
    res.json(deletedBookreact);
  });
});

module.exports = router;
