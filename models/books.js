const mongoose = require('mongoose')
const Schema = mongoose.Schema

var bookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  category: {type: String},
  stok: {type: Number},
  harga: {type: Number},
  urlimage: {type: String},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
})

var book = mongoose.model('books', bookSchema)

module.exports = book;
