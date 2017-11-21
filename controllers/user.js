const userModel = require('../models/user')

class User {

  static signup(req, res) {
    userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then((user) => {
      res.send(user)
    }).catch((err) => {
      res.send(err)
    })
  }

  static signin(req, res) {
    userModel.findOne({email: req.body.email}).then((user) => {
      if(user) {
        if(user.password == req.body.password) {
          res.send({
            username: user.username,
            email: user.email
          })
        }
        else {
          res.send({
            msg: 'login salah'
          })
        }
      }
      else {
        res.send({
          msg: 'tidak ditemukan'
        })
      }
    })
  }
}

module.exports = User;
