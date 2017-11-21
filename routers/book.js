const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')

router.get('/all', bookController.getAllBook)
router.post('/add', bookController.createBook)

module.exports = router;
