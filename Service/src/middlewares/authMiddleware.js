
const jwt = require("jsonwebtoken");
const { trusted } = require("mongoose");

const authentication = (req, res, next) => {
  try {
    let bearerHeader = req.headers.authorization;
     if (typeof bearerHeader == "undefined") return res.status(400).send({ status: false, message: "Token is missing" });

    let bearerToken = bearerHeader?.split(' ')
    let token = bearerToken[1] ? bearerToken[1] : req.body.authToken;


  

    jwt.verify(token, process.env.JWT_TOKEN, function (err, data) {
      if (err) {
        return res.status(400).send({ status: false, message: err.message })
      } else {
        req.decodedToken = data;
        next()
      }
    });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message })
  }
}
const adminAuthorization = (req, res, next) => {
 if( req.decodedToken.isAdmin===true ){
    next();
  } else {
    res.status(403).send({ status: false, message: 'Access denied. Admin privileges required.' });
  }
};

module.exports = { authentication,adminAuthorization}