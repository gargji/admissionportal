const mongoose =require('mongoose')

const connectDB=()=>{
    // url1="mongodb+srv://rahul:6267467976@cluster0.vyygpko.mongodb.net/admissionportal?retryWrites=true&w=majority"
    url="mongodb+srv://rahul:6267467976@cluster0.jxcyrvh.mongodb.net/admission?retryWrites=true&w=majority"
    // return mongoose.connect('mongodb://localhost:27017/examportal')
    return mongoose.connect(url)
    .then(()=>{
        console.log('connected successfully')
    }).catch((err)=>{
        console.log('yha')
    })
}
module.exports=connectDB