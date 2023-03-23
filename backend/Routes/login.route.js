const express = require("express");
const LoginRoute = express.Router();
const { UserModel } = require("../Models/user.model");
const jwt = require("jsonwebtoken");

LoginRoute.post("/new", async (req, res) => {
  const { email, password } = req.body;
  try {
    const isPresent = await UserModel.findOne({ email: email });

    if (isPresent) return res.status(401).json({ msg: "User already exist" });

    const newUser = new UserModel({ email, password });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

LoginRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email, password });

    if (user.email) {
      const token = await jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: user,
        },
        "pococare"
      );
      console.log(token)

      res.status(200).send({ token: token });
    } else {
      res.status(401).json({ msg: "Wrong Credentials" });
    }
  } catch (err) {
    res.status(401).json({ msg: "Wrong Credentials" })
  }
});

module.exports = { LoginRoute };
