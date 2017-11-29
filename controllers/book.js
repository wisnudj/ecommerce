const bookModel = require('../models/books')

class Book {

  static createBook(req, res) {
    bookModel.create({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stok: req.body.stok,
      harga: req.body.harga,
      urlimage: req.body.urlimage
    }).then((book) => {
      res.send(book)
    }).catch((err) => {
      res.send(err)
    })
  }

  static getAllBook(req, res) {
    bookModel.find().then((books) => {
      res.send(books)
    }).catch((err) => {
      res.send(err)
    })
  }

  static deleteBook(req, res) {
    bookModel.remove({_id: req.params.id}).then((hasil) => {
      res.send(hasil)
    })
  }

  static editBook(req, res) {
    bookModel.update({_id: req.params.id}, {
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stok: req.body.stok,
      harga: req.body.harga,
      urlimage: req.body.urlimage
    }).then((hasil) => {
      res.send(hasil)
    })
  }

}

module.exports = Book;
