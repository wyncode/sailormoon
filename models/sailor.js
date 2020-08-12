const mongoose = require('mongoose');

const sailorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  japanese: {
    type: String
  }
});

const Sailor = mongoose.model('Sailor', sailorSchema);
module.exports = Sailor;
