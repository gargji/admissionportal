const StudentModel = require("../models/Student")




class FrontendController {

    static login = async(req,res)=>{
        res.render("front/login",({message : req.flash('success'),error : req.flash('error')}))
    }

    static register = async(req,res)=>{
        res.render("front/register",({message : req.flash('success'),error : req.flash('error')}))
    }
    

    static dashbord=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const btech = await StudentModel.findOne({fillid:_id,course:"B.Tech"})
        // console.log(btech)
        const MTECH = await StudentModel.findOne({fillid:_id,course:"M.Tech"})
        // console.log(MTECH)
        const MCA = await StudentModel.findOne({fillid:_id,course:"MCA"})
        // console.log(MCA)
        res.render('dashbord/userdashbord',{n:name ,id:_id,MT:MTECH,BT:btech,M:MCA})
    }
    static userdatadisplay1 =async(req,res)=>{
        const {name,_id} =req.data1
        const btech = await StudentModel.findOne({fillid:_id,course:"B.Tech"})
        // const MTECH = await StudentModel.findOne({fillid:_id,course:"M.Tech"})
        // const MCA = await StudentModel.findOne({fillid:_id,})
        // console.log(MCA+"mca")
        res.render('dashbord/userdatadisplay1',{n:name ,BT:btech})
      }
      static userdatadisplay2 =async(req,res)=>{
        const {name,_id} =req.data1
        // const btech = await StudentModel.findOne({fillid:_id,course:"B.Tech"})
        const MTECH = await StudentModel.findOne({fillid:_id,course:"M.Tech"})
        // const MCA = await StudentModel.findOne({fillid:_id,})
        // console.log(MTECH+"mca")
        res.render('dashbord/userdatadisplay2',{n:name ,MT:MTECH})
      }
      static userdatadisplay3 =async(req,res)=>{
        const {name,_id} =req.data1
        // const btech = await StudentModel.findOne({fillid:_id,course:"B.Tech"})
        // const MTECH = await StudentModel.findOne({fillid:_id,course:"M.Tech"})
        const MCA = await StudentModel.findOne({fillid:_id,course:"MCA"})
        // console.log(MCA+"mca")
        res.render('dashbord/userdatadisplay3',{n:name ,M:MCA})
      }

      static userdataall =async(req,res)=>{
        const {name,_id} =req.data1
        // const btech = await StudentModel.findOne({fillid:_id,course:"B.Tech"})
        // const MTECH = await StudentModel.findOne({fillid:_id,course:"M.Tech"})
        const MCA = await StudentModel.find({fillid:_id,})
        // console.log(MCA)
        res.render('dashbord/userdataall',{n:name ,M:MCA})
      }
      static dashbordAdmin=async(req,res)=>{
        const {name,_id,email} =req.data1
        // console.log(email)
        const data = await StudentModel.find()
      //  console.log(data)
       
        // console.log(MCA)
        res.render('dashbord/admindashboard',{n:name ,id:_id,data:data})
    }
    static about =async(req,res)=>{
      const {name,_id,email} =req.data1
      res.render('front/about',{n:name })
    }

}module.exports = FrontendController