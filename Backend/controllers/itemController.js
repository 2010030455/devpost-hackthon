const {Item} = require('./../models/Item.js')
const createItem = async(req,res,next)=>{
 const {name,price} = req.body
 const newItem =await Item({
    name,
    price,
 }).save()
 res.json(newItem)
}
const getAllItems = async (req,res,next) =>{
   var Items = await Item.find().exec();
   res.json({ Items: Items.map(Item => Item.toObject({ getters: true })) })
 }
 const checkout = async (req,res,next)=>{
   var orders = req.body
   
 }
exports.createItem=createItem;
exports.getAllItems=getAllItems;