const { default: mongoose } = require("mongoose");

const userScema = mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true 
  },
  password: {
    required: true,
    type: String,
  }
});

const UserModel = mongoose.model("user", userScema);
module.exports = { UserModel };
