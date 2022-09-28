const mongoose = require('mongoose')
const Item = new mongoose.Schema({
    name:{type:String},
    price:{type:Number}
})
exports.Item = mongoose.model('item',Item)