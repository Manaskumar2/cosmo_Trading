const express = require("express");
const router = express.Router();

const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin,getAllUsers,activeUser,deactiveUser,getDownlineDetails } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId } = require("../controllers/withdrawAccountController")
const { getPaymentRequest, updatePaymentRequest } = require("../controllers/rechargeController")
const {getpremiumRequest,updatePremiumUser, getPremiumRequestById} =  require("../controllers/premiumController")

router.post("/signIn", adminlogin)

router.get("/getAllUsers", authentication,adminAuthorization ,getAllUsers)
router.patch("/deactivateUser/:userId",authentication,adminAuthorization,deactiveUser)
router.patch("/activateUser/:userId", authentication, adminAuthorization, activeUser)
router.get("/getDownliners/:userId",authentication,adminAuthorization,getDownlineDetails)


router.post("/uploadQrcode", authentication, uploadQrCode)
router.get("/getqrcode",authentication,adminAuthorization,getAllImageURLs)

router.get("/payment-request", authentication, adminAuthorization, getPaymentRequest)
router.patch("/confirm-payment", authentication, adminAuthorization,updatePaymentRequest)



router.get("/getbankDetails/:userId", authentication, adminAuthorization, getBankAccountbyId)
router.get("/getPremiumRequest", authentication, adminAuthorization, getpremiumRequest)
router.get("/getPremiumRequest/:userId", authentication, adminAuthorization,getPremiumRequestById)
router.put("/updatePremiumRequest/:userId", authentication, adminAuthorization,updatePremiumUser)





module.exports =router