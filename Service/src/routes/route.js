const express = require("express");
const router = express.Router();
const { signUp, signIn,sendOtpPhone,verifyOtp,resetPassword,updateUserProfile,getUserDetails, getDownlineDetails} = require("../controllers/userController")
const{authentication} = require("../middlewares/authMiddleware")
const gameController = require("../controllers/gameController")



router.post("/SignUp",signUp)
router.post("/signIn", signIn)
router.post("/forgotPassword", sendOtpPhone)
router.post("/verifyOtp",verifyOtp)
router.post("/resetPassword", resetPassword)
router.post("/updateUserProfile", authentication, updateUserProfile)
router.get("/getUserProfile/:UID",authentication,getUserDetails )

router.post("/bet", authentication, gameController.betController)
router.get("/bettingHistory/:UserId", authentication, gameController.growUpUserBettingHistroy)
router.get('/getDownlinerDetails/:userId', authentication, getDownlineDetails)
router.get('/getgame/:duration', authentication, gameController.getGame)
router.get("/getSuccessFullGameHistory",authentication,gameController.getGameHistory)

module.exports =router