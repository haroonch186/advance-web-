const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  link: String
});
module.exports = mongoose.model('Book', bookSchema);