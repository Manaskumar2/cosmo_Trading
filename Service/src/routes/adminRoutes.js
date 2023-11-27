const express = require("express");
const router = express.Router();


const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin,getAllUsers,activeUser,deactiveUser, getUserDetailsByUserId, changePassword, getUserDetailsByUID } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId, updateBankAccountAnduserDetails, getUserDetailsWithBank } = require("../controllers/withdrawAccountController")
const { getPaymentRequest, updatePaymentRequest, dateWiseRecharge } = require("../controllers/rechargeController")
// const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const {getpremiumRequest,updatePremiumUser, getPremiumRequestById, getPremiumDetails} =  require("../controllers/premiumController")
const { getWithdrawRequest, confirmRequest, dateWiseWithDraw } = require("../controllers/userWithdrawController");
const { deleteGames, growUpBetamount } = require("../controllers/gameController");
const { riseUpBetamount, delete2ndGames } = require("../controllers/secondGameController");
const {getCompanyDetails, companyRechargeAndWithdraw} = require("../controllers/companyWalletController");
const { franchiseCommissions } = require("../controllers/commissionController");
const { uploadImage, deleteImages } = require("../controllers/popUpimageController");
const { createArticle } = require("../controllers/articleController");
const { createGiftCode, getGiftCode, getGiftcodesAmount } = require("../controllers/giftCodeController");
const { createFakePlayers } = require("../controllers/playerController");
const { getBetAmounts, getGameHistoryDateWise } = require("../controllers/gameHistoryController");
const { addBank } = require("../controllers/bankController");
const { createDocument, deleteAllDocument } = require("../controllers/winningDocumentController");
const { createBankAccount } = require("../controllers/adminBankController");
const { getCompanyProfit } = require("../controllers/companyProfitController");
router.post("/signIn", adminlogin)
router.put("changePassword", authentication, adminAuthorization, changePassword),
    

router.get("/getAllUsers", authentication,adminAuthorization,getAllUsers)
router.patch("/deactivateUser/:userId",authentication,adminAuthorization,deactiveUser)
router.patch("/activateUser/:userId", authentication, adminAuthorization, activeUser)
router.get("/getUserDetails/:userId", authentication, adminAuthorization, getUserDetailsByUserId),
// new
router.get("/getUserDetailsByUID", authentication,adminAuthorization,getUserDetailsByUID)


router.post("/uploadQrcode/:uploadedBy", authentication, adminAuthorization, uploadQrCode)


router.get("/getqrcode",authentication,adminAuthorization,getAllImageURLs)

router.get("/payment-request", authentication, adminAuthorization, getPaymentRequest)
router.patch("/confirm-payment/:paymentId", authentication, adminAuthorization,updatePaymentRequest)



router.get("/getbankDetails/:userId", authentication, adminAuthorization, getBankAccountbyId)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>premium  section>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

router.get("/getPremiumRequest", authentication, adminAuthorization, getpremiumRequest)
router.get("/getPremiumRequest/:userId", authentication, adminAuthorization,getPremiumRequestById)
router.put("/updatePremiumRequest/:userId", authentication, adminAuthorization, updatePremiumUser)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>withdraw section>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


router.get("/getWithdrawRequest", authentication, adminAuthorization, getWithdrawRequest)
router.put("/conformWithdrawRequest/:requestId", authentication, adminAuthorization, confirmRequest)
router.get("/getWithdrawRequest", authentication, adminAuthorization, getWithdrawRequest)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>GrowUp<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
router.get("/growUpbetAmount", authentication, adminAuthorization, growUpBetamount)


router.delete("/delete", authentication,adminAuthorization,deleteGames)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RiseUp<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
router.get("/riseUpbet", authentication, adminAuthorization, riseUpBetamount)



router.delete("/deleteRiseUpGameHistory",authentication,adminAuthorization,delete2ndGames)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>companyDetails<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

router.get("/companyDetails", authentication, adminAuthorization, getCompanyDetails)
router.get("/getComapnyProfits",authentication,getCompanyProfit)
//********************************Frinchase ************************************************//

router.get("/getPremiumUsers", authentication, adminAuthorization, getPremiumDetails)
router.post("/franchisecommissions", authentication, adminAuthorization, franchiseCommissions)

//******************************** total transaction  ************************************************//

//********************************please check >> https**********
router.get("/totalTransactions", authentication, adminAuthorization, companyRechargeAndWithdraw)
router.get("/getDateWiseRecharge", authentication, adminAuthorization, dateWiseRecharge)
router.get("/getDateWiseWithdraw", authentication, adminAuthorization,dateWiseWithDraw)

//********************************uploads popUpimage ************************************************
router.post("/uploads", authentication, adminAuthorization, uploadImage)
router.delete("/deleteImage",authentication,adminAuthorization,deleteImages)
//********************************Articles  ************************************************
router.post("/articles", authentication, adminAuthorization, createArticle)

//********************************get and update user details and bank account ********************************
router.put("/updateUser/:userId", authentication, adminAuthorization, updateBankAccountAnduserDetails)
router.get("/userAndBankData/:userId", authentication, adminAuthorization, getUserDetailsWithBank)
//**************************************************giftCode */
router.post("/giftCode", authentication, adminAuthorization, createGiftCode)
router.get("/getGiftCode", authentication, adminAuthorization, getGiftCode)
router.get("/getGiftCodeAmount",getGiftcodesAmount)
//************************************************fakePlayers ************************************************
router.post("/fakePlayers", authentication, adminAuthorization, createFakePlayers)
router.get("/geBetAmount",authentication,adminAuthorization, getBetAmounts)

//************************************************bank name ************************************************

router.post("/bankName", authentication, adminAuthorization, addBank)

//************************************************ bank name ************************************************
router.post("/createBank", authentication, adminAuthorization, createBankAccount)


//**************************************winningDoument****************************************** */
router.post("/winningDoument", authentication, adminAuthorization, createDocument)
router.delete("/deleteWinningDocument", authentication, adminAuthorization, deleteAllDocument)

// -------------------------------- datewise betting History --------------------------------

router.get("/bettingHistory",authentication,adminAuthorization,getGameHistoryDateWise)
module.exports =router