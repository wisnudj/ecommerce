const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce-fancy')
const Schema = mongoose.Schema

var userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
})

var user = mongoose.model('users', userSchema)

module.exports = user
