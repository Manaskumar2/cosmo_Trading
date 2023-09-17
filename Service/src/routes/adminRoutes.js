const express = require("express");
const router = express.Router();


const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin,getAllUsers,activeUser,deactiveUser,getDownlineDetails, getUserDetailsByUserId } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId, updateBankAccount } = require("../controllers/withdrawAccountController")
const { getPaymentRequest, updatePaymentRequest } = require("../controllers/rechargeController")
// const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const {getpremiumRequest,updatePremiumUser, getPremiumRequestById} =  require("../controllers/premiumController")
const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const { deleteGames, growUpBetamount } = require("../controllers/gameController");
router.post("/signIn", adminlogin)

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
router.put("/updateUserBankAccount/:bankId",authentication,adminAuthorization,updateBankAccount)

router.get("/getWithdrawRequest", authentication, adminAuthorization, getWithdrawRequest)
router.put("/conformWithdrawRequest/:requestId", authentication, adminAuthorization, confirmRequest)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>GrowUp<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
router.get("/growUpbetAmount", authentication,adminAuthorization,growUpBetamount)

router.delete("/delete", authentication,adminAuthorization,deleteGames)


module.exports =router