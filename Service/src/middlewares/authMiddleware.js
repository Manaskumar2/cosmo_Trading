
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authentication = async (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;

    if (!bearerHeader) {
      return res.status(400).send({ status: false, message: "Token is missing" });
    }

    const bearerToken = bearerHeader.split(' ')[1];
    const token = bearerToken || req.body.authToken;

    jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
      if (err) {
        return res.status(403).send({ status: false, message: err.message });
      }

      try {
        if (decoded.isAdmin == true) {
          req.decodedToken = decoded;
          next();
        } else {
          const user = await userModel.findOne({ _id: decoded.userId, token });
          if (!user) {
            return res.status(403).send({ status: false, message: "Unauthorized, please login again." });
          }

          req.decodedToken = decoded;
          next();
        }
      } catch (error) {
        return res.status(500).send({ status: false, message: "Internal Server Error" });
      }
    });
  } catch (err) {
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};



const adminAuthorization = (req, res, next) => {
 if( req.decodedToken.isAdmin===true ){
    next();
  } else {
    res.status(403).send({ status: false, message: 'Access denied. Admin privileges required.' });
  }
};

module.exports = { authentication,adminAuthorization}