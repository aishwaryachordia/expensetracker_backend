const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        maxLength:20,
        required:true,
    },
    userPassword:{
        type:String,
        minLength:8,
        required:true
    },
    userEmail:{
        type:String,
        minLength:20,
        required:true
    }
})

module.exports=mongoose.model('User',UserSchema)