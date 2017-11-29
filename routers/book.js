const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')
const loginmiddle = require('../middleware/login');

router.get('/all', bookController.getAllBook)
router.post('/add', bookController.createBook)
router.delete('/delete/:id', bookController.deleteBook)
router.put('/edit/:id', bookController.editBook)

module.exports = router;
