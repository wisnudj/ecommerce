const jwtokenhelp = require('../helper/jwtoken')

var login = (req, res, next) => {
  var token = req.params.token
  jwtokenhelp.verifytoken(token).then((decoded) => {
    if(decoded.login) {
      req.header.decoded = decoded
      next()
    }
    else {
      res.send('belum login')
    }
  })
}

var admin = (req, res, next) => {
  var token = req.params.token
  jwtokenhelp.verifytoken(token).then((decoded) => {
    if(decoded.isAdmin) {
      req.header.decoded = decoded
      next()
    }
    else {
      res.send('belum login')
    }
  })
}

module.exports = {
  login,
  admin
};
