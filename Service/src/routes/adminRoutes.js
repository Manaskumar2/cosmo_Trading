const express = require("express");
const router = express.Router();

const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId } = require("../controllers/withdrawAccountController")
const { getPaymentRequest,updatePaymentRequest } = require("../controllers/rechargeController")

router.post("/signIn",adminlogin )

router.post("/uploadQrcode", authentication, uploadQrCode)
router.get("/getqrcode",authentication,adminAuthorization,getAllImageURLs)

router.get("/payment-request", authentication, adminAuthorization, getPaymentRequest)
router.patch("/confirm-payment", authentication, adminAuthorization,updatePaymentRequest)



router.get("/getbankDetails/:userId", authentication, adminAuthorization, getBankAccountbyId)






