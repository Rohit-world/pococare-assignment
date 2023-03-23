const express = require("express");
const LoginRoute = express.Router();
const { UserModel } = require("../Models/user.model");

LoginRoute.post("/new", async (req, res) => {
  const { email, password } = req.body;
  try {
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
    if (user) {
      const token = await jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: "foobar",
        },
        "secret"
      );

      res.status(200).json({ token: token });
    } else {
      res.status(401).json({ msg: "Wrong Credentials" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = { LoginRoute };
