const { default: mongoose } = require("mongoose");

const CountryScema = mongoose.Schema({
name:String,
dial_code:String,
code:String
});

const CountryModel = mongoose.model("user", CountryScema);
module.exports = {CountryModel };
