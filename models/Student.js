const mongoose= require('mongoose')

const StudentSchema = new mongoose.Schema({
  
    username:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true
    },
    mobile:{
        type:String,
        Required:true
    },
    college:{
        type:String,
        Required:true
    },
    address:{
        type:String,
        Required:true
    },
    branch:{
        type:String,
        Required:true
    },
    gender:{
        type:String,
        Required:true
    },
    course:{
        type:String,
        Required:true
    },
    fillid:{
        type:String
    }
 
    
    
})
const StudentModel = mongoose.model('Student',StudentSchema)
module.exports=StudentModel