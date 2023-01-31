const express =require('express')
const courseController = require('../controllers/courseController')
const FrontendController = require('../controllers/FrontendController')
// const { verify_login } = require('../controllers/UserController')
const UserController = require('../controllers/UserController')
// const UserController = require('../controllers/UserController')
const router =express.Router()
const CheckUserAuth=require("../middleware/auth")


// router.get("/login",FrontendController.login)
router.get('/',FrontendController.login)
router.get('/register',UserController.AdminResgister)
router.post('/registeruser',UserController.Resgister)
router.post('/verify_login',UserController.verify_login)
// router.get('/admin/register',UserController.AdminResgister)

// user dash board
router.get('/dashboard',CheckUserAuth,FrontendController.dashbord)
router.get("/userdataall",CheckUserAuth,FrontendController.userdataall)
router.get("/about",CheckUserAuth,FrontendController.about)
// admin dashboard
router.get('/dashboard/Admin',CheckUserAuth,FrontendController.dashbordAdmin)
router.get('/admin/student_view/:id',CheckUserAuth,UserController.studentview)
router.get('/admin/student_edit/:id',CheckUserAuth,UserController.studentedit)
router.get('/admin/student_delete/:id',CheckUserAuth,UserController.studentdelete)

router.get('/admindatadisplay1',CheckUserAuth,UserController.admindatadisplay1)
router.get('/admindatadisplay2',CheckUserAuth,UserController.admindatadisplay2)
router.get('/admindatadisplay3',CheckUserAuth,UserController.admindatadisplay3)
router.get('/getalluser',CheckUserAuth,UserController.getalluser)
router.get('/alldataregi',CheckUserAuth,UserController.alldataregi)
// course
router.get('/btechform',CheckUserAuth,courseController.btechform)
router.get('/mtechform',CheckUserAuth,courseController.mtechform)
router.get('/mcaform',CheckUserAuth,courseController.mcaform)

router.post('/btechinsert',CheckUserAuth,courseController.btechinsert)
router.post('/mtechinsert',CheckUserAuth,courseController.mtechinsert)
router.post('/mcainsert',CheckUserAuth,courseController.mcainsert)

router.get("/userdatadisplay1",CheckUserAuth,FrontendController.userdatadisplay1)
router.get("/userdatadisplay2",CheckUserAuth,FrontendController.userdatadisplay2)
router.get("/userdatadisplay3",CheckUserAuth,FrontendController.userdatadisplay3)



// verify_login
// verfy login
router.post('/verify_login',UserController.verify_login)

router.get('/logout',UserController.logout)



module.exports=router
