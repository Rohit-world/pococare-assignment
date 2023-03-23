const express = require('express')
const app = express()
const port = 3002
const {Auth}=require("./middlware/auth")
const { LoginRoute } = require('./Routes/login.route')
app.use(express.json())


app.use("/login",LoginRoute)




app.use(Auth)
app.use("/",(req,res)=>{
    res.send("hello world")
    })


//Auth middleware will apply on every Route except Login because it is trigger after that


app.listen(port, () => console.log(`Example app listening on port ${port}!`))