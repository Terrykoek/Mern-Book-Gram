const mongoose = require("mongoose");

const bookreactSchema = new mongoose.Schema({
  title: String,
  sypnopsis: String,
  url: String,
  likeCount: Number,
  email: String
});

const Bookreacts = mongoose.model("Bookreact", bookreactSchema);

module.exports = Bookreacts;
