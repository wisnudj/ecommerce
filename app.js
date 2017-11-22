const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const book = require('./routers/book')
const user = require('./routers/user')
const transaction = require('./routers/transaction')
const mongoose = require('mongoose')
mongoose.connection.openUri("mongodb://admin:admin@cluster0-shard-00-00-96man.mongodb.net:27017,cluster0-shard-00-01-96man.mongodb.net:27017,cluster0-shard-00-02-96man.mongodb.net:27017/ecommerce-fancy?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", (err) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('connect');
  }
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/book', book)
app.use('/api/user', user)
app.use('/api/transaction', transaction)

app.listen(3000, () => {
  console.log("server jalan di port 3000...");
})
