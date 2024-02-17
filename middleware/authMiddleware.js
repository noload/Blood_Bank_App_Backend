const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Invalid Token Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return es.status(500).send({
      success: false,
      message: "Auth Failed",
      error,
    });
  }
};
