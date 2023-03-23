const express = require('express')
const app = express()
const port = 3002
const {Auth}=require("./middlware/auth")
const { LoginRoute } = require('./Routes/login.route')
const {connection}=require("./database.config")
const {CountryRoute}=require("./Routes/country.route")
app.use(express.json())



app.use("/login",LoginRoute)

app.use(Auth)//Auth middleware will apply on every Route except Login because it is used after that

app.use("/country",CountryRoute)



app.listen(port,async () =>{
    await connection
    console.log("connected to db")
    console.log(` app listening on port ${port}!`)
} )
