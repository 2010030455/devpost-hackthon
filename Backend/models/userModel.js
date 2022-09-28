const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {type:String},
    mobilenumber: {type:Number},
    password: {type:String},
    email:{type:String},
    address: {
        city:{type:String},
        pincode:{type:Number},
        landmark:{type:String}
    },
    cart:[{ type: mongoose.Types.ObjectId, ref: 'Item' }],
    orders:[
        { 
        DeliveryAddress: {
        city:{type:String},
        pincode:{type:Number},
        landmark:{type:String}
        },
        items:[{ type: mongoose.Types.ObjectId, ref: 'Item' }]
        }
        ]
})
exports.userModel = mongoose.model('user',userSchema)