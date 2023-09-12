const express = require("express");
const router = express.Router();

const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin,getAllUsers,activeUser,deactiveUser,getDownlineDetails } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId } = require("../controllers/withdrawAccountController")
const { getPaymentRequest, updatePaymentRequest } = require("../controllers/rechargeController")
const {getpremiumRequest,updatePremiumUser, getPremiumRequestById} =  require("../controllers/premiumController");
const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");

router.post("/signIn", adminlogin)

router.get("/getAllUsers", authentication,adminAuthorization ,getAllUsers)
router.patch("/deactivateUser/:userId",authentication,adminAuthorization,deactiveUser)
router.patch("/activateUser/:userId", authentication, adminAuthorization, activeUser)
router.get("/getDownliners/:userId",authentication,adminAuthorization,getDownlineDetails)


router.post("/uploadQrcode/:uploadedBy", authentication,adminAuthorization, uploadQrCode)
router.get("/getqrcode",authentication,adminAuthorization,getAllImageURLs)

router.get("/payment-request", authentication, adminAuthorization, getPaymentRequest)
router.patch("/confirm-payment", authentication, adminAuthorization,updatePaymentRequest)



router.get("/getbankDetails/:userId", authentication, adminAuthorization, getBankAccountbyId)
router.get("/getPremiumRequest", authentication, adminAuthorization, getpremiumRequest)
router.get("/getPremiumRequest/:userId", authentication, adminAuthorization,getPremiumRequestById)
router.put("/updatePremiumRequest/:userId", authentication, adminAuthorization, updatePremiumUser)

router.get("/getWithdrawRequest", authentication, adminAuthorization, getWithdrawRequest)
router.put("/conformWithdrawRequest/:requestId", authentication, adminAuthorization,confirmRequest)





module.exports =router