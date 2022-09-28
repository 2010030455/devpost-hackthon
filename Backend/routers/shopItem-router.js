const express = require('express')
const {createItem,getAllItems} = require('./../controllers/itemController.js')
const router = express.Router();
router.post('/item',createItem)
router.get('/items', getAllItems)
router.post('/checkout',)
module.exports = router;