// const UserModel = require('../../models/User')
const UserModel = require('../models/user')
// const UsaerModel =require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const StudentModel = require('../models/Student');


class UserController {



    static AdminResgister = async(req,res)=>{
        res.render('front/register',{message : req.flash('error')})
    }

    static Resgister = async(req,res)=>{
        // res.render('admin/register')
        // console.log(req.body)
        // input wale name hai ye jo form me hai inhe variable me store krlia
        const{name,email,password,confirmpassword} = req.body; 
        const admin = await UserModel.findOne({email:email})
        if(admin){
           req.flash('error','Email Alreadt Exists!')
            return res.redirect('/register')
        }
        else{
            if(name && email && password && confirmpassword){
                if(password == confirmpassword){
                    try{
                        const hashpassword =await bcrypt.hash(password,10)
                        // npm install bcrypt for password encrpt
                        const result = await UserModel({
                            name:name,
                            email:email,
                            password:hashpassword,
                        })
                        await result.save()
                        req.flash('success','Registration successfully ! please login')
                        return res.redirect('/')
                        
                    }catch(err){
                        console.log(err)
                    }

                }else{
                req.flash('error','Password and Confirm Password does not Match!')
                // return res.redirect('/admin/register')
                }

            }
            else{
                req.flash('error','All Feilds Are Require')
                // return res.redirect('/admin/register')
            }
        }

     
    }
    static verify_login = async(req,res)=>{


        try{
            const{email,password}=req.body
            if(email && password){
            //   console.log(password)
               const user= await UserModel.findOne({email:email})
            //    console.log(user.password)
               if(user !=null){
                const ismatched =await bcrypt.compare(password,user.password)
                if((user.email) && ismatched){

                    // token genrate
                     // token genrate
                     var token = jwt.sign({ userId: user._id }, 'Rahul12345');
                    //  console.log("HY")
                    //  console.log(token)
                    //  console.log("hy")
                     res.cookie('token',token)
                    //  console.log(r)
                    const Role=user.role
                // console.log(Role)
                if(Role=="Admin"){  res.redirect('/dashboard/Admin')}
                else
                {
                    res.redirect('/dashboard')
                }
                    // res.redirect('/dashboard')
                }else{
                    req.flash('error','email or  passowrd is not valid')
                   return res.redirect('/')
                   }
               }
               else{req.flash('error','email or  passowrd is not valid')
               return res.redirect('/')


               }
            }else{
                req.flash('error','All Feilds Are Require')
                return res.redirect('/')

            }
        }catch(err){
            console.log(err)
        }
        // res.render('admin/register',{message : req.flash('error')})
    }

    static logout =async(req,res)=>{
        try{
            res.clearCookie('token')
            res.redirect('/')

        }catch(err){
            console.log(err)
        }
    }
    static studentview=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const data = await StudentModel.find()
    //    console.log(data)
       
        // console.log(MCA)
        res.render('dashbord/Admindashboard',{n:name ,id:_id,data:data})
    }
    static studentedit=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const data = await StudentModel.find()
    //    console.log(data)
       
        // console.log(MCA)
        res.render('dashbord/Admindashboard',{n:name ,id:_id,data:data})
    }
    static studentdelete=async(req,res)=>{
        try {

            // ye image delete ke liye
            // const user =await StudentModel.findById(req.params.id)
            // const image_id=user.image.public_id;
            // console.log(image_id)
            // await cloudinary.uploader.destroy(image_id)





            const data = await StudentModel.findByIdAndDelete(req.params.id)

            res.redirect('/dashboard/Admin')

        } catch (err) {
            console.log(err)
        }
    }
    static admindatadisplay3=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const data = await StudentModel.find({course:"MCA"})
    //    console.log(data)
       
        // console.log(MCA)
        res.render('dashbord/admindata/admindatadisplay1',{n:name ,id:_id,data:data})
    }
    static admindatadisplay2=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const data = await StudentModel.find({course:"M.Tech"})
    //    console.log(data)
       
        // console.log(MCA)
        res.render('dashbord/admindata/admindatadisplay1',{n:name ,id:_id,data:data})
    }
     static admindatadisplay1=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const data = await StudentModel.find({course:"B.Tech"})
    //    console.log(data)
       
        // console.log(MCA)
        res.render('dashbord/admindata/admindatadisplay1',{n:name ,id:_id,data:data})
    }
    static getalluser=async(req,res)=>{
        const {name,_id,email} =req.data1
        
        const data = await UserModel.find()
    //    console.log(data)
       
       
        res.render('dashbord/admindata/allusers',{n:name ,id:_id,data:data})
    }
    static alldataregi=async(req,res)=>{
        const {name,_id,email} =req.data1
        
        const data = await StudentModel.find()
    //    console.log(data)
       
       
        res.render('dashbord/admindata/alldata',{n:name ,id:_id,data:data})
    }
}
module.exports=UserController