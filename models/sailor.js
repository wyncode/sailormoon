const mongoose = require('mongoose');

const sailorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  japanese: {
    type: String
  },
  aliases: {
    type: Array
  },
  occupation: {
    type: Array
  },
  birthday: {
    type: String
  }
});

const Sailor = mongoose.model('Sailor', sailorSchema);
module.exports = Sailor;
