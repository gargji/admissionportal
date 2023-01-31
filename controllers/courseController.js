const StudentModel = require('../models/Student')

class courseController {


static btechform=async(req,res)=>{
    const {name} =req.data1
    res.render('front/btechform',{message : req.flash('error'),n:name})
}
static mtechform=async(req,res)=>{
    const {name} =req.data1
    res.render('front/mtechform',{message : req.flash('error'),n:name})
}

static mcaform=async(req,res)=>{
    const {name} =req.data1
    res.render('front/mcaform',{message : req.flash('error'),n:name})
}



static btechinsert=async(req,res)=>{
    // static btec = async (req,res)=>{
        // console.log(req.body)
        const  {username,gender,college,address,mobile, branch,course,email} = req.body
        const fillid =req.data1._id
        const user = await StudentModel.findOne({email:email})
        if(user){
            req.flash('error','email already exits😊')
            return res.redirect('/btechform')
           
        }
      
        else{
            if (  username && gender && college && address  && mobile && branch && course && email ){
                 try{
                const result = await StudentModel({
                    username :username,
                    gender :gender,
                    college :college,
                    address :address,
                
                    mobile :mobile,
                    branch : branch,
                    
                
                    course: course,
                    email:email,
                    fillid:fillid
                })
                await result.save()
                req.flash('success','Registration successfully' )
                // console.log("sucess")
                // return res.redirect('/admin/display')
                return res.redirect('/userdatadisplay')

            }catch(error){
                console.log(error)
            }

            }
            else{
                req.flash('error','All Field Are Required😶')
            return res.redirect('/btechform')
            }
        }
    // }
}


static mtechinsert=async(req,res)=>{
   
            const  {username,gender,college,address,mobile, branch,course,email} = req.body
            const fillid =req.data1._id
            const user = await StudentModel.findOne({email:email})
            if(user){
                req.flash('error','email already exits😊')
                return res.redirect('/mtechform')
               
            }
          
            else{
                if (  username && gender && college && address  && mobile && branch && course && email ){
                     try{
                    const result = await StudentModel({
                        username :username,
                        gender :gender,
                        college :college,
                        address :address,
                    
                        mobile :mobile,
                        branch : branch,
                        
                    
                        course: course,
                        email:email,
                        fillid:fillid
                    })
                    await result.save()
                    req.flash('success','Registration successfully' )
                    console.log("sucess")
                    return res.redirect('/userdatadisplay')
    
                }catch(error){
                    console.log(error)
                }
    
                }
                else{
                    req.flash('error','All Field Are Required😶')
                return res.redirect('/mtechform')
                }
        
    }
    // res.render('front/mcaform')
}


static mcainsert=async(req,res)=>{
    
            const  {username,gender,college,address,mobile, branch,course,email,} = req.body
            const fillid =req.data1._id
            const user = await StudentModel.findOne({email:email})
            if(user){
                req.flash('error','email already exits😊')
                return res.redirect('/mcaform')
               
            }
          
            else{
                if (  username && gender && college && address  && mobile && branch && course && email ){
                     try{
                    const result = await StudentModel({
                        username :username,
                        gender :gender,
                        college :college,
                        address :address,
                    
                        mobile :mobile,
                        branch : branch,
                        
                    
                        course: course,
                        email:email,
                        fillid:fillid
                    })
                    await result.save()
                    req.flash('success','Registration successfully' )
                    console.log("sucess")
                    return res.redirect('/userdatadisplay')
    
                }catch(error){
                    console.log(error)
                }
    
                }
                else{
                    req.flash('error','All Field Are Required😶')
                return res.redirect('/mcaform')
                }
         
    }
  
}


//   static userdatadisplay =async(req,res)=>{
//     const {name} =req.data1
//     res.render('dashbord/userdatadisplay',{n:name})
//   }


}
module.exports=courseController