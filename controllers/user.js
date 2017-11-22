const userModel = require('../models/user')
const kripto = require('../helper/kripto');
const jwtoken = require('../helper/jwtoken');

class User {

  static signup(req, res) {

    kripto.enkripsi(req.body.password).then((hash) => {

      userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: hash
      }).then((user) => {
        res.send(user)
      }).catch((err) => {
        res.send(err)
      })
    })

  }

  static signin(req, res) {
    userModel.findOne({email: req.body.email}).then((user) => {
      if(user) {
        var plainpassword = req.body.password
        var hash = user.password
        kripto.dekripsi(plainpassword, hash).then((hasil) => {
          if(hasil) {
            var newObj = {
              id: user._id,
              username:user.username,
              email: user.email,
              login: true,
              isAdmin: user.isAdmin
            }

            jwtoken.createtoken(newObj).then((token) => {
              res.send({msg: "login berhasil", token: token})
            })

          }
          else {
            res.send('salah')
          }
        })
      }
    })
  }
}

module.exports = User;
