var jwt = require("jsonwebtoken");

const Auth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) return res.send("token not found");
  try {
    var decoded = jwt.verify(token, "pococare");
  } catch (err) {
    return res.status(401).send({ msg: "token not valid" });
  }
  next();
};

module.exports = { Auth };
