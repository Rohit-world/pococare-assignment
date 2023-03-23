const mongoose=require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', false)
let connection=  mongoose.connect(process.env.mongo_url,{
    useNewUrlParser:true,
   
})
module.exports={connection}

