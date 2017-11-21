const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce-fancy')
const Schema = mongoose.Schema

var transactionSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  totalprice: {type: Number, required: true},
  items: [{ type: Schema.Types.ObjectId, ref: 'books' }]
})

var transaction = mongoose.model('todos', transactionSchema)

module.exports = transaction;
