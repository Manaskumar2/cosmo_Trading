const express = require("express");
const router = express.Router();


const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin,getAllUsers,activeUser,deactiveUser,getDownlineDetails, getUserDetailsByUserId, changePassword } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId, updateBankAccountAnduserDetails, getUserDetailsWithBank } = require("../controllers/withdrawAccountController")
const { getPaymentRequest, updatePaymentRequest } = require("../controllers/rechargeController")
// const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const {getpremiumRequest,updatePremiumUser, getPremiumRequestById, getPremiumDetails} =  require("../controllers/premiumController")
const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const { deleteGames, growUpBetamount } = require("../controllers/gameController");
const { riseUpBetamount } = require("../controllers/secondGameController");
const {getCompanyDetails, companyRechargeAndWithdraw} = require("../controllers/companyWalletController");
const { franchiseCommissions } = require("../controllers/commissionController");
const { uploadImage, getImage, deleteImages } = require("../controllers/popUpimageController");
const { createArticle } = require("../controllers/articleController");
const { createGiftCode } = require("../controllers/giftCodeController");
router.post("/signIn", adminlogin)
router.put("changePassword",authentication,adminAuthorization,changePassword)

router.get("/getAllUsers", authentication,adminAuthorization ,getAllUsers)
router.patch("/deactivateUser/:userId",authentication,adminAuthorization,deactiveUser)
router.patch("/activateUser/:userId", authentication, adminAuthorization, activeUser)
router.get("/getDownliners/:userId", authentication, adminAuthorization, getDownlineDetails)
router.get("/getUserDetails/:userId", authentication, adminAuthorization,getUserDetailsByUserId)


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




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>companyDetails<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

router.get("/companyDetails",authentication,adminAuthorization,getCompanyDetails)
//********************************Frinchase ************************************************//

router.get("/getPremiumUsers", authentication, adminAuthorization, getPremiumDetails)
router.post("/franchisecommissions", authentication, adminAuthorization, franchiseCommissions)

//******************************** total transaction  ************************************************//
router.get("/totalTransactions", authentication, adminAuthorization, companyRechargeAndWithdraw)

//********************************uploads popUpimage ************************************************
router.post("/uploads", authentication, adminAuthorization, uploadImage)
router.delete("/deleteImage",authentication,adminAuthorization,deleteImages)
//********************************Articles  ************************************************
router.post("/articles", authentication, adminAuthorization, createArticle)

//********************************get and update user details and bank account ********************************
router.put("/updateUser/:userId", authentication, adminAuthorization, updateBankAccountAnduserDetails)
router.get("/userAndBankData/:userId", authentication, adminAuthorization, getUserDetailsWithBank)
//**************************************************giftCode */
router.post("/giftCode",authentication,adminAuthorization,createGiftCode)
module.exports =router