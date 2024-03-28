const user = require("../models/user")
const UserSchema=require("../models/user")
const bycrypt=require("bcrypt")

exports.addUser=async(req,res)=>{

    const salt=await bycrypt.genSalt(10)
    const secPassword=await bycrypt.hash(req.body.userPassword,salt)

    try{
        if(!req.body.userName||!req.body.userPassword||!req.body.userEmail){
            return res.status(400).json({"message":"All fields are required"})
        }    
    }catch(error){
        res.status(200).json({"message":"Server Error"})
    }

    //inserting credentials into db
    await user.create({
        userName: req.body.userName,
        userPassword: secPassword,
        userEmail: req.body.userEmail
    })
    res.status(200).json({"message":"User created successfully"})

}