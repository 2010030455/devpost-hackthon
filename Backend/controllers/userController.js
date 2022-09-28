const {userModel} = require('./../models/userModel.js')
const bcrypt = require('bcryptjs')
const createUser=async(req,res,next)=>{
  const {name,mobilenumber,email}=req.body
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const newUser = userModel({
    name,
    mobilenumber,
    email,
    password:req.body.password
  }).save()
  res.json(newUser)
}
const getAllUsers = async (req,res,next) =>{
  var Users = await userModel.find().exec();
  res.json({ Users: Users.map(user => user.toObject({ getters: true })) })
}
const loginUser = async(req,res,next)=>{
  const {mobilenumber,password}=req.body
  var existingUser
  var validPassword
  try {
    existingUser = await userModel.findOne({ mobilenumber: mobilenumber });
     validPassword = await bcrypt.compare(password, existingUser.password);
  }catch{
  }
  if (!validPassword) {
       res.json("Invalid password")
  }
  else {
      res.json({ message: 'Logged in!' })
  }
}


exports.createUser=createUser
exports.getAllUsers=getAllUsers
exports.loginUser=loginUser