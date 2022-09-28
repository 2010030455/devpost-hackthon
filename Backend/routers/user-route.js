const express = require('express')
const router = express.Router();
const userController = require('./../controllers/userController.js');
router.post('/signup',userController.createUser)
router.get('/users',userController.getAllUsers)
router.post('/login',userController.loginUser)
module.exports=router