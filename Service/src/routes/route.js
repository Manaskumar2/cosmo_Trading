const express = require("express");
const router = express.Router();
const { signUp, signIn,sendOtpPhone,verifyOtp,resetPassword,updateUserProfile,getUserDetails, getDownlineDetails,getReferralStats, getCommissionByDate, walletToWalletTransactions, changePassword, getWalletTransactions} = require("../controllers/userController")
const{authentication,adminAuthorization} = require("../middlewares/authMiddleware")
const gameController = require("../controllers/gameController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { createRecharge, getRechargeHistory } = require("../controllers/rechargeController")
const { createBankAccount } = require("../controllers/withdrawAccountController");
const { applyPremiumUser, getpremiumRequest } = require("../controllers/premiumController");
const { withdrawrequest, withdrawalHistory } = require("../controllers/userWithdrawController");
const { get2ndGame, bet2ndController, get2ndGameHistory, riseUpUserBettingHistory,update2ndGameUid } = require("../controllers/secondGameController");
const { getImage } = require("../controllers/popUpimageController");
const { getArticle } = require("../controllers/articleController");
const { getCommissionDetails } = require("../controllers/commissionController");
const { claimGiftcode } = require("../controllers/giftCodeController");
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

router.patch("/changePassword", authentication, changePassword)

router.post("/bet", authentication, gameController.betController)
router.get("/bettingHistory/:userId", authentication, gameController.growUpUserBettingHistory)
router.get('/getDownlinerDetails/:userId', authentication, getDownlineDetails)
router.get('/getgame/:duration', authentication, gameController.getGame)
router.get("/getSuccessFullGameHistory/:duration", authentication, gameController.getGameHistory)


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<second Game>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/getSecondGame/:duration", authentication, get2ndGame)
router.post("/betSecondGame", authentication, bet2ndController)
router.get("/gameHistory/:duration", authentication, get2ndGameHistory)
router.get("/get2ndgameUserHistory/:userId",authentication,riseUpUserBettingHistory)

// <<<<<< end >>>>>>>>>>>

router.get('/getAllImageURLs', authentication, getAllImageURLs);




router.post('/submit-payment',authentication,createRecharge)

router.get("/rechargeHistory", authentication,getRechargeHistory)

router.get("/getCommissionDetails/:date", authentication,getCommissionByDate)


//...............................................withdrows****************//

router.post("/createbankAccount", authentication, createBankAccount)
router.post("/createWithdrawalRequest", authentication, withdrawrequest)
router.get("/getWithdrawalHistory/:userId", authentication,withdrawalHistory)


//...............................................premium ********************************//


router.post("/applyPremium", authentication, applyPremiumUser)
router.get("/getPremiumUser", authentication,getpremiumRequest)


//...............................................2nd game ********************************//

router.post("/update2ndGameUID",update2ndGameUid)

//...............................................1st game ********************************//

router.post("/updateGameUID", gameController.updateGameUid)
//........................................getPOPuP IMAGES ********************************//
router.get("/images",authentication,getImage)
//................................articles ********************************

router.get("/articles", authentication, getArticle)
//................................commissions history ********************************

router.get("/commissionHistory", authentication,getCommissionDetails)
//................................claim gift codes ********************************

router.post("/claimGiftCode", authentication, claimGiftcode)

//................................ WALLET TO WALLET ********************************
router.post("/walletToWallet", authentication, walletToWalletTransactions)
router.get("/getwalletToWallet", authentication,getWalletTransactions)

module.exports =router