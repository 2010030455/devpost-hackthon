const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())
const Userrouter = require('./routers/user-route')
const itemRouter = require('./routers/shopItem-router') 
const userController = require('./controllers/userController.js');
app.use('/',Userrouter)
app.use('/',itemRouter)
const PORT=process.env.PORT || 5000
mongoose.connect('mongodb+srv://manichand:root@cluster0.oll6q.mongodb.net/jumbish?retryWrites=true&w=majority').then(()=>{
    app.listen(PORT)
    console.log(`Listening on port ${PORT}`)
})

