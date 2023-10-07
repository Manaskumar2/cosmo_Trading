const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage })


const { authentication, adminAuthorization } = require("../middlewares/authMiddleware")
const { adminlogin,getAllUsers,activeUser,deactiveUser,getDownlineDetails, getUserDetailsByUserId } = require("../controllers/userController")
const { uploadQrCode, getAllImageURLs } = require('../controllers/qrCodeController')
const { getBankAccountbyId, updateBankAccount } = require("../controllers/withdrawAccountController")
const { getPaymentRequest, updatePaymentRequest } = require("../controllers/rechargeController")
// const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const {getpremiumRequest,updatePremiumUser, getPremiumRequestById, getPremiumDetails} =  require("../controllers/premiumController")
const { getWithdrawRequest, confirmRequest } = require("../controllers/userWithdrawController");
const { deleteGames, growUpBetamount } = require("../controllers/gameController");
const { riseUpBetamount } = require("../controllers/secondGameController");
const {getCompanyDetails, companyRechargeAndWithdraw} = require("../controllers/companyWalletController");
const { franchiseCommissions } = require("../controllers/commissionController");
const { uploadImage, getImage } = require("../controllers/popUpimageController");
const { createArticle } = require("../controllers/articleController");
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
router.post("/uploads", authentication,adminAuthorization, upload.single('image'), uploadImage)
//********************************Articles  ************************************************
router.post("/articles", authentication,adminAuthorization,createArticle)
module.exports =router