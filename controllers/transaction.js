const transactionModel = require('../models/transaction')


class Transaction {

  static beli(req, res) {

    transactionModel.create({
      customer: req.body.customer,
      totalprice: req.body.totalprice,
      items: req.body.book
    }).then((transaksi) => {
      res.send(transaksi)
    })

  }

  static getalltransaction(req, res) {
    transactionModel.find().populate('items').exec((err, transaction) => {
      res.send(transaction)
    })
  }

  static getonetransaction(req, res) {
    transactionModel.findOne({_id: req.params.id}).then((transaction) => {
      transaction.findOne({_id: req.params.id}).populate('items').exec((err, hasil) => {
        res.send(hasil)
      })
    })
  }

}

module.exports = Transaction;
