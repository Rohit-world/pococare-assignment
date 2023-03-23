const express = require("express");
const CountryRoute = express.Router();
const { CountryModel} = require("../Models/Country.model");

CountryRoute.get("/",async(req,res)=>{

    try{

        const Country=await CountryModel.find()
        res.json(Country)

    }catch(err){
        res.status(500).json({msg:"Something went wrong"})
    }
})

module.exports={CountryRoute}