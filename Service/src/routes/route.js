const express = require("express");
const router = express.Router();
const { signUp, signIn,sendOtpPhone,verifyOtp,resetPassword,updateUserProfile,getUserDetails,getReferralStats, getCommissionByDate, walletToWalletTransactions, changePassword, getWalletTransactions, getUserDetailsByUserId, updateDownlineForExistingUsers} = require("../controllers/userController")
const{authentication} = require("../middlewares/authMiddleware")
const gameController = require("../controllers/gameController")
const {getAllImageURLs } = require('../controllers/qrCodeController')
const { createRecharge, getRechargeHistory } = require("../controllers/rechargeController")
const { createBankAccount, getBankAccountbyId } = require("../controllers/withdrawAccountController");
const { applyPremiumUser, getpremiumRequest } = require("../controllers/premiumController");
const { withdrawrequest, withdrawalHistory } = require("../controllers/userWithdrawController");
const { get2ndGame, bet2ndController, get2ndGameHistory, riseUpUserBettingHistory,update2ndGameUid } = require("../controllers/secondGameController");
const { getImage } = require("../controllers/popUpimageController");
const { getArticle } = require("../controllers/articleController");
const { getCommissionDetails, getCommission, commissionAmount } = require("../controllers/commissionController");
const { claimGiftcode } = require("../controllers/giftCodeController");
const { getPlayers } = require("../controllers/playerController");
const { getBankName } = require("../controllers/bankController");
const { getDocument } = require("../controllers/winningDocumentController");
const { getBankAccount } = require("../controllers/adminBankController");
const { getAllUsersAtLevel, calculateTotalTeam } = require("../controllers/downlineController");
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
router.get("/userDetails",authentication,getUserDetailsByUserId)

router.patch("/changePassword", authentication, changePassword)

router.post("/bet", authentication, gameController.betController)
router.get("/bettingHistory/:userId", authentication, gameController.growUpUserBettingHistory)
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
router.get("/getWithdrawalHistory/:userId", authentication, withdrawalHistory)
router.get("/getBankCard/:userId",authentication,getBankAccountbyId)

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

router.get("/commissionHistory", authentication, getCommissionDetails)

// new
router.get("/commissionAmount/:userId", authentication,commissionAmount)

router.get("/dateWiseCommission", authentication,getCommission)
//................................claim gift codes ********************************

router.post("/claimGiftCode", authentication, claimGiftcode)

//................................ WALLET TO WALLET ********************************
router.post("/walletToWallet", authentication, walletToWalletTransactions)
router.get("/getwalletToWallet", authentication, getWalletTransactions)
//....................................getPlayers....................................
router.get("/getPlayers", authentication, getPlayers)

//................................getBankNames................................

router.get("/getBankNames", authentication,getBankName)
//............................getWinningDocuments................................
router.get("/getWinningDocuments", authentication, getDocument)
//................................getBank Transfer data................................
router.get("/getBankTransferData", authentication, getBankAccount)
router.get("/updateexitng", updateDownlineForExistingUsers)
router.get("/getAllUsersAtLevel", authentication, getAllUsersAtLevel)
router.get("/getTotalTeams/:userId",authentication,calculateTotalTeam)
module.exports =router