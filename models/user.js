const mongoose= require('mongoose')

const UserSchema = new mongoose.Schema({
  
    name:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true
    },
    password:{
        type:String,
        Required:true
    },
    role:{
        type:String,
        default:"user"
    }
    
})
const UserModel = mongoose.model('User',UserSchema)
module.exports=UserModel