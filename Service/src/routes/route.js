const express = require("express");
const router = express.Router();
const { signUp, signIn,sendOtpPhone,verifyOtp,resetPassword,updateUserProfile,getUserDetails, getDownlineDetails,getReferralStats, getCommissionByDate, walletToWalletTransactions, changePassword} = require("../controllers/userController")
const{authentication,adminAuthorization} = require("../middlewares/authMiddleware")
const gameController = require("../controllers/gameController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { createRecharge } = require("../controllers/rechargeController")
const { createBankAccount } = require("../controllers/withdrawAccountController");
const { applyPremiumUser, getpremiumRequest } = require("../controllers/premiumController");
const { withdrawrequest } = require("../controllers/userWithdrawController");
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve("../Service/qrcode") );
//     },
//     filename: function (req, file, cb) {
//       cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
//     }
//   });
  
// const upload = multer({ storage: storage });



router.post("/SignUp",signUp)
router.post("/signIn", signIn)
router.post("/forgotPassword", sendOtpPhone)
router.post("/verifyOtp",verifyOtp)
router.post("/resetPassword", resetPassword)
router.post("/updateUserProfile", authentication, updateUserProfile)
router.get("/getUserProfile/:UID", authentication, getUserDetails)
router.get("/getReferralStats/:referralID", authentication, getReferralStats)
router.post("/walletToWallet", authentication, walletToWalletTransactions)
router.patch("/changePassword", authentication,changePassword)

router.post("/bet", authentication, gameController.betController)
router.get("/bettingHistory/:UserId", authentication, gameController.growUpUserBettingHistroy)
router.get('/getDownlinerDetails/:userId', authentication, getDownlineDetails)
router.get('/getgame/:duration', authentication, gameController.getGame)
router.get("/getSuccessFullGameHistory", authentication, gameController.getGameHistory)
router.get('/getAllImageURLs', authentication, getAllImageURLs);



router.post('/submit-payment',authentication,createRecharge)







router.post("/uploadQrcode", authentication, uploadQrCode)



// router.patch('/payment-request', authentication, adminAuthorization, getpaymentRequest)

router.get("/getCommissionDetails/:date", authentication,getCommissionByDate)


//...............................................withdrows****************//

router.post("/createbankAccount", authentication, createBankAccount)
router.post("/createWithdrawalRequest",authentication,withdrawrequest)


//...............................................premium ********************************//


router.post("/applyPremium", authentication, applyPremiumUser)
router.get("/getPremiumUser", authentication,getpremiumRequest)






module.exports =router