const express = require('express')

const app = express()
const port = 3000


const connectDB=require('./db/connectDB.JS')
connectDB()
const flash = require("connect-flash");
const session =require('express-session')
const web =require("./routes/web")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(session({
    secret:"secret",
    cookie:{ maxAge:60000},
    resave:false,
    saveUninitialized:false,
  }));
  app.use(flash())
app.use("/",web)


app.use(express.json())


app.set('view engine','ejs')




app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
