
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user')
const CheckUserAuth = async(req,res,next)=>{
    //   console.log("not auth user")
    // console.log(req.cookie)
    const {token} =req.cookies;
    if(!token){
        req.flash('error','unauthrized user plzz login')
                return res.redirect('/')
    
    }else{
        const verify_token =jwt.verify(token,'Rahul12345')
    //    console.log(verify_token)
    const data=await UserModel.findOne({_id:verify_token.userId})
    // console.log(data)
    req.data1=data
        next()
    }
    // console.log(token)
    }
    module.exports=CheckUserAuth