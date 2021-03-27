const mongoose = require('mongoose');

const bookreactSchema = new mongoose.Schema({
    title: String,
    url: String,
});

const Bookreacts = mongoose.model('Bookreact', bookreactSchema)

module.exports = Bookreacts;