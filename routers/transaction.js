const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction')

router.get('/all', transactionController.getalltransaction)
router.get('/:id', transactionController.getonetransaction)
router.post('/beli', transactionController.beli)

module.exports = router;
