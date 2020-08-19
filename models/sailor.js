const mongoose = require('mongoose');
const sailorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  japanese_name: {
    type: String,
    required: true
  },
  aliases: {
    type: Array,
    required: true
  },
  relationships: {
    type: Array,
    required: true
  },
  birthdate: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    enum: ['male', 'female', 'non-binary']
  },
  likes: {
    type: Array,
    required: true
  },
  dislikes: {
    type: Array,
    required: true
  }
});
const Sailor = mongoose.model('Sailor', sailorSchema);
module.exports = Sailor;
