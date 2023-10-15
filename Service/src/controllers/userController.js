const userModel = require("../models/userModel")
const commissionModel = require("../models/commissionModel")
const WalletTransactionModel = require("../models/walletToWalletModel")
const jwt = require("jsonwebtoken")
const validation = require("../validations/validation")
const { generateUniqueReferralCode, } = require("../util/util");
// const schedule = require('node-schedule')


const twilio = require('twilio')("ACfe32400dd6c9efafd446cecf70102c0b", "7a4d599d44148524de82afe08e75b4d2");


const signUp = async (req, res) => {
  try {
    let data = req.body;

    let { phoneNumber, password, referralCode,userName} = data

    if (validation.isValidBody(data)) return res.status(400).send({ status: false, message: "provide all required fields" })
    if (!referralCode) return res.status(400).send({ status: false, message: "please provide refferal code" })
    const checkrefferalCode = await userModel.findOne({ referralCode: referralCode })
    if (!checkrefferalCode) return res.status(400).send({ status: false, message: "Invalid referral code" })
    if (!userName) return res.status(404).send({ status: false, message: "please enter your Name" })
   if (!validation.isValidName(userName)) return res.status(404).send({ status: false, messaage: "Please enter valid Name" })
    


    if (!validation.isValid(phoneNumber)) return res.status(400).send({ status: false, message: `PhoneNumber  is Required` })

    let uniquePhone = await userModel.findOne({ phoneNumber: phoneNumber})
    if (!validation.isValidPhone(phoneNumber)) return res.status(400).send({ status: false, message: `This PhoneNumber is Invalid` })

    if (uniquePhone) return res.status(400).send({ status: false, message: `This PhoneNumber  has already registered Please Sign In`, })

    if (!validation.isValidPwd(password)) return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters", })
    
    const parentDetails = await userModel.findOne({ referralCode: referralCode })
    if (!parentDetails) return res.status(404).send({ status: false, message: "invalid referralcode" })



  
    const latestUser = await userModel
      .findOne()
      .sort({ createdAt: -1 })
    let latestUID = latestUser.UID
    let  UID = latestUID+1;
   
    
    if (!UID) return res.status(404).send({ status: false, message: "UID is not available" })
    const createUser = await userModel.create({
      phoneNumber: phoneNumber,
      password:password,
      parentReferralCode: referralCode,
      referralCode: await generateUniqueReferralCode()+UID,
      UID: UID,
      name: userName,
      parentUserUid:parentDetails.UID
    })
   
    if (referralCode) {
      findParentUser = await userModel.findOne({ referralCode: referralCode })

      if (!findParentUser) {
        return res.status(400).send({ status: false, message: `Invalid Referal Code`, })
      }

      const newUserObjectId = createUser._id;
     

      findParentUser.downline.push({ user: newUserObjectId });
      await findParentUser.save();
    }
  

    res.status(201).json({ status: true, message: "user create sucessfully", data: createUser })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: false, message: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const data = req.body;
    const { phoneNumber, password } = data;

    if (!phoneNumber || !password) {
      return res.status(400).send({ status: false, message: "Provide both phone number and password to login" });
    }

    const findUser = await userModel.findOne({ phoneNumber: phoneNumber ,isDeleted:false});

    if (!findUser) {
      return res.status(400).send({ status: false, message: "Invalid Phone Number or your Mobile No Has  ban" });
    }

    const correctPassword = findUser.password;

    if(password!== correctPassword){
      return res.status(400).send({ status: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ phoneNumber: findUser.phoneNumber, userId: findUser._id,isAdmin:findUser.isAdmin,UID:findUser.UID}, process.env.JWT_TOKEN, { expiresIn: '1d' });

    const response = {
      phoneNumber: findUser.phoneNumber,
      _id: findUser._id,
      authToken: token,
      isAdmin: findUser.isAdmin,
      UID:findUser.UID
    };

    res.status(200).send({ status: true, message: "User login successful", data: response });

  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: "An error occurred while processing your request." });
  }
};


const adminlogin =async (req, res) => { 
    try {
    const data = req.body;
    const { phoneNumber, password } = data;

    if (!phoneNumber || !password) {
      return res.status(400).send({ status: false, message: "Provide both phone number and password to login" });
    }

    const findUser = await userModel.findOne({ phoneNumber: phoneNumber});

    if (!findUser) {
      return res.status(400).send({ status: false, message: "Invalid Phone Number" });
      }
      if(findUser.isAdmin!==true) return res.status(403).send({ status: false, message: "wrong url please go to the user login page" });

    const correctPassword = findUser.password;

    
    if (correctPassword!==password) {
      return res.status(400).send({ status: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ phoneNumber: findUser.phoneNumber,userId: findUser._id,isAdmin:findUser.isAdmin}, process.env.JWT_TOKEN, { expiresIn: '365d' });

    const response = {
      phoneNumber: findUser.phoneNumber,
      _id: findUser._id,
      authToken: token,
      isAdmin: findUser.isAdmin
    };

    res.status(200).send({ status: true, message: "User login successful", data: response });

  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: "An error occurred while processing your request." });
  }
}



function generateOTP(length) {
  const characters = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return otp;
}


const sendOtpPhone = async (req, res) => {

  try {
    const { phoneNumber } = req.body;

    const user = await userModel.findOne({ phoneNumber: phoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'User with this phone number not found.' });
    }

    const otp = generateOTP(6);

    const message = await twilio.messages.create({
      body: `Your OTP for password reset is: ${otp}`,
      from: "+12186738875",
      to: `+91${phoneNumber}`
    });


    const otpToken = jwt.sign({ phoneNumber: phoneNumber, otp: otp, purpose: "otp_verify" }, process.env.JWT_TOKEN, { expiresIn: 600 })

    res.json({ message: 'OTP sent successfully. Please check your phone.', data: { otpToken } });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
}

const verifyOtp = async (req, res) => {

  try {
    const { otpToken, otp } = req.body;
 

    if (!otpToken) return res.status(400).json({ status: false, message: "Invalid Otp Token" })

    const data = jwt.verify(otpToken, process.env.JWT_TOKEN)

    if (data.purpose != "otp_verify") {
      return res.status(400).json({ status: false, message: "Invalid Otp Token" })
    }

    if (data.otp != otp) {
      return res.status(400).json({ status: false, message: "Invalid Otp" })
    }

    const user = await userModel.findOne({ phoneNumber: data.phoneNumber })

    if (!user) return res.status(400).json({ status: false, message: "Invalid Otp Token" })

    const verifiedToken = jwt.sign({ userId: user._id, purpose: "otp_verified" }, process.env.JWT_TOKEN, { expiresIn: 600 })
    res.status(201).json({ status: true, message: "Otp Verified Successfully", data: { verifiedToken } })

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
}

const resetPassword = async (req, res) => {
  try {
    const { verifiedToken, newPassword } = req.body;


    const data = jwt.verify(verifiedToken, process.env.JWT_TOKEN)

    if (data.purpose != "otp_verified") {
      return res.status(400).json({ status: false, message: "Invalid Otp Token" })
    }

    const user = await userModel.findOne({ _id: data.userId });
    if (!user) return res.status(404).json({ status: false, message: "Invalid  verified Otp token" });

   


    user.password = newPassword;

    await user.save()

    res.json({ message: 'Password reset successful.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
}

const updateUserProfile = async (req, res) => {

  try {


    const { userName} = req.body;

    if (!userName) {
      return res.status(400).json({ status:false,message: 'No Name provided' });
    }
    if (!validation.isValidName(userName)) return res.status(400).json({ status: false, message: "invalid name  provided" })

    const user = await userModel.findById(req.decodedToken.userId);

    if (!user) {
      return res.status(404).json({status:false, message: 'User not found' });
    }

    user.name = userName;
  
    await user.save();

    res.status(200).json({status:true, message: 'Profile updated successfully', data:user._doc });
  } catch (error) {
    console.error(error);
    res.status(500).json({status:false, message: 'An error occurred while updating the profile' });
  }
}



// -------------------------------user update and get user details---------------------------------//


// const getUserDetails = async (req, res) => {
//   try {
//     const UID = req.params.UID;
//     const userId = req.decodedToken.userId
//     let userDetails;

//     if (UID) {
    
//         const key = `userDetails_${UID}`;

//       // const cachedData = cache.get(key);

//       userDetails = await userModel.findOne({ UID: UID })
//            if (!userDetails) {
//         return res
//           .status(400)
//           .send({ status: false, message: "Please Enter correct UID" });
//       }

//     } else {
//       userDetails = await userModel.findOne({ _id: userId })
//              if (!userDetails) {
//         return res
//           .status(400)
//           .send({ status: false, message: "Please logIn" });
//       }
//     }
//     // cache.put(key, userDetails, 60 * 60 * 1000);

//     return res
//       .status(200)
//       .send({ status: true, data: { userDetails } });
//   } catch (error) {
//     return res.status(500).send({ status: false, message: error.message });
//   }
// };
const getUserDetails = async (req, res) => {
  try {
    const UID = req.params.UID;
    const userId = req.decodedToken.userId;
    let userDetails;

    if (UID) {
      const key = `userDetails_${UID}`;
      userDetails = await userModel.findOne({ UID: UID });
      if (!userDetails) {
        return res
          .status(400)
          .send({ status: false, message: "Please Enter correct UID" });
      }
    } else {
      userDetails = await userModel.findOne({ _id: userId });
      if (!userDetails) {
        return res
          .status(400)
          .send({ status: false, message: "Please logIn" });
      }
    }

  
    // const commissionDetails = userDetails.commissions.map((commission) => ({
    //   date: commission.date,
    //   amount: commission.amount,
    // }));

    return res.status(200).send({
      status: true,
      data: {
        userDetails,
        // commissionDetails,
      },
    });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ status: false, message: error.message });
  }
};
const getUserDetailsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    let userDetails;

    if (userId) {
      const key = `userDetails_${userId}`;
      userDetails = await userModel.findOne({ _id: userId });
      if (!userDetails) {
        return res
          .status(400)
          .send({ status: false, message: "Please Enter correct userId" });
      }
    }

  
    // const commissionDetails = userDetails.commissions.map((commission) => ({
    //   date: commission.date,
    //   amount: commission.amount,
    // }));

    return res.status(200).send({
      status: true,
      data: {
        userDetails,
  
      },
    });
  } catch (error) {
    console.error(error)
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getDownlineDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const level = parseInt(req.query.level) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const user = await userModel.findById(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const getDownline = async (user, currentLevel) => {
      if (currentLevel === level) {
        return [
          {
            phoneNumber: user.phoneNumber || null,
            UID: user.UID || null,
            referralDate: user.createdAt || null,
            name: user.name || null,
            downline: [],
          }
        ];
      }

      const downlineDetails = [];
      for (const downlineUser of user.downline) {
        if (downlineUser.user) {
          const subUser = await userModel.findById(downlineUser.user._id);
          if (subUser) {
            const subUserDownline = await getDownline(subUser, currentLevel + 1);
            downlineDetails.push(...subUserDownline);
          }
        }
      }

      return downlineDetails;
    };

    const downlineDetails = await getDownline(user, 1);

    res.json({
      level: level,
      totalUsers: downlineDetails.length,
      downlineDetails: downlineDetails.slice(0, limit),
    });
  } catch (error) {
    console.error('Error fetching downline user details:', error);
    res.status(500).json({ error: 'An error occurred while fetching downline user details' });
  }
};


const getReferralStats = async (req, res) => {
  try {
    const referralID  = req.params.referralID;

    if (!referralID) return res.status(400).send({ status: false, message: 'please enter a referral ID' })
    const today = new Date();
    const todayStart = new Date(today);
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);
    
    const todayCount = await userModel.countDocuments({
      parentReferralCode:referralID,
      createdAt: { $gte: todayStart, $lte: todayEnd },
    });

    const weeklyCount = await userModel.countDocuments({parentReferralCode:referralID,
      createdAt: { $gte: sevenDaysAgo, $lte: todayEnd },
    });
    const totalCount = await userModel.countDocuments({ parentReferralCode: referralID })

    return res.status(200).json({
      status: true,
      data: {
        todayCount: todayCount,
        weeklyCount: weeklyCount,
        totalCount: totalCount
      },
    });
  } catch (error) {
    console.error(error)
    return res.status(500).json({ status: false, message: error.message });
  }
};
const changePassword = async (req, res) => {
    try {
        const userId = req.decodedToken.userId
        const tokenData = await userModel.findOne({ _id: userId })
        if (!tokenData) return res.status(201).send({ status: true, message: "invalid userId please logIn" })

        const password = req.body.password
      const confirmPassword = req.body.confirmPassword
         if (!validation.isValidPwd(password)) return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters", })
        if (password != confirmPassword) return res.status(400).send({ status: true, message: "both password doesnot match" })
      
        const updatedPassword = await userModel.findByIdAndUpdate({ _id:userId}, { $set: { password:password} }, { new: true })
        res.status(201).send({ status: true, message: "suceesfull update your password" })

    } catch (error) {
      console.error(error)
        res.status(500).send({ status: false, error: error.message })

    }
}

const deactiveUser = async (req, res) => {
    try {
      const userId = req.params.userId
   
        const adminId = req.decodedToken.userId
      
        if (!validation.isValidObjectId(adminId)) return res.status(400).send({ status: false, message: " ENTER VALID ADMIN ID" })
      
        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: " ENTER VALID USER ID" })
        const userData = await userModel.findOne({ _id: userId, isDeleted: false })
      
        if (!userData) return res.status(400).send({ status: false, message: "No user Exist in this Id" })

        await userModel.findByIdAndUpdate(userId, { isDeleted:true}, { new: true })
        return res.status(200).send({ status: true, message: "sucessfully deactivated ", userId: userData._id })


    } catch (error) {
      console.error(error)
        res.status(500).send({ status: false, error: error.message })

    }
}
const activeUser = async (req, res) => {
    try {


       const userId = req.params.userId
        const adminId = req.decodedToken.userId

        if (!validation.isValidObjectId(adminId)) return res.status(400).send({ status: false, message: " ENTER VALID ADMIN ID" })

         if(userId == adminId) return res.status(403).send({status:false,mesage:"you cannot active yourself"})

        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: " ENTER VALID USER ID" })
        const userData = await userModel.findOne({ _id: userId, isDeleted: true })
        if (!userData) return res.status(400).send({ status: false, message: "No user Exist in this Id" })

        await userModel.findByIdAndUpdate(userId, { isDeleted:false}, { new: true })
        return res.status(200).send({ status: true, message: "sucessfully activated ", userId: userData._id })


    } catch (error) {
      console.error(error)
        res.status(500).send({ status: false, error: error.message })

    }
}
    const  getAllUsers = async (req, res) => {
      try {
        const { queryPageIndex = 1, queryPageSize = 20, queryPageFilter, queryPageSortBy = [{ id: '_id', desc: false }] } = req.query;
        
        let query = {isAdmin:false};
        let sortBy = queryPageSortBy[0].id;
        let sortOrder = queryPageSortBy[0].desc ? -1 : 1;
      
    
        if (queryPageFilter) {
          let searchRegex = new RegExp(queryPageFilter, "i");
          query = {
            $or: [
              { phoneNumber: searchRegex },
            ],
          };
        }

        let getUsers;
        
        const count = await userModel.countDocuments(query);

        getUsers = await userModel
          .find(query)
          .sort({ [sortBy]: sortOrder })
          .limit(parseInt(queryPageSize))
          .skip((parseInt(queryPageIndex) - 1) * parseInt(queryPageSize))
          .exec();

        if (getUsers.length < 1) {
          return res
            .status(400)
            .send({ status: false, message: "No user found" });
        }

        const response = {
          getUsers,
          totalPages: Math.ceil(count / parseInt(queryPageSize)),
          currentPage: parseInt(queryPageIndex),
          totalCount: count,
        };

        return res.status(200).send({ status: true, message: "Successful", response });

      } catch (error) {
        console.error(error)
        return res.status(500).send({ status: false, message: error.message });
    }
};

const getCommissionByDate = async (req, res) => {
  try {
    
    const requestedDate = new Date(req.params.date);

    if (isNaN(requestedDate)) {
      return res.status(400).json({ status: false, message: "Invalid date format" });
    }

    
    const userId = req.decodedToken.userId;


    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const commissionsForDate = user.commissions.filter((commission) => {
      const commissionDate = new Date(commission.date);
      return commissionDate.toDateString() === requestedDate.toDateString();
    });

    const totalCommissionAmount = commissionsForDate.reduce((total, commission) => {
      return total + commission.amount;
    }, 0);

    return res.status(200).json({
      status: true,
      message: "Commission amount for the specified date",
      date: requestedDate,
      totalCommissionAmount,
    });
  } catch (error) {
    console.error("Error getting commission by date:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};
const walletToWalletTransactions = async (req, res) => { 
  try {
    const { receiverUID, amount } = req.body;
    const senderId = req.decodedToken.userId
    const transforAmount =parseInt(amount)
    if(validation.isValidObjectId(senderId))
        if (
            !amount ||
            !receiverUID ||
            isNaN(receiverUID) ||
            isNaN(transforAmount) 
    
        ) {
            return res
                .status(400)
                .json({ status: false, message: "Missing parameters" });
      }
    const sender = await userModel.findById(senderId);
    const receiver = await userModel.findOne({ UID: receiverUID });
    if(sender.phoneNumber===receiver.phoneNumber) return res.status(400).send({status: false, message: "you cannot send yourself"})
    if (transforAmount < 100) return res.status(401).send({ status: false, message: "Amount must be greater than 100" });
    if(transforAmount>sender.walletAmount) return res.status(400).send({ status: false,message:"insufficient funds" });
  
    if (!sender || !receiver) {
      return res.status(404).json({ message: "Sender or receiver not found." });
    }

    
    if (sender.isPremiumUser && !receiver.isPremiumUser) {
      
      const commission = (transforAmount * 0.01);
      sender.walletAmount -= transforAmount;
      receiver.walletAmount += transforAmount
      receiver.rechargeAmount+=transforAmount

      
      sender.commissionAmount += commission;
      sender.walletAmount+=commission
      await commissionModel.create({
        userId: sender._id,
        amount: commission,
        date: Date.now(),
        commissionType: "RECHARGE",
      })
       const walletTransaction = await WalletTransactionModel.create({
        sender: sender.UID,
        receiver: receiver.UID,
          amount: transforAmount,
        commission:commission
      })

      await sender.save();
      
      await receiver.save();

      return res.status(200).json({
        message: "Transfer successful.",
        commission: commission,
        amount:transforAmount
      });
    } else if(receiver.isPremiumUser && !sender.isPremiumUser) {
      if (sender.rechargeAmount != 0) return res.status(400).send({ status: false, messaage: "you can't money transfer please bet first" })
      const commission = (transforAmount * 0.01);
      sender.walletAmount -= transforAmount;
      
      receiver.walletAmount +=transforAmount;
      receiver.commissionAmount += commission;
      receiver.walletAmount+=commission

      await sender.save();
      await receiver.save();
       await commissionModel.create({
        userId: receiver ._id,
        amount: commission,
        date: Date.now(),
        commissionType: "RECHARGE",
       })
        const walletTransaction = await WalletTransactionModel.create({
        sender: sender.UID,
        receiver: receiver.UID,
          amount: transforAmount,
        commission:commission
      })

      return res.status(200).json({
        message: "Transfer successful.",
        commission: commission,

        amount:transforAmount
      
      });
    }
      else if (receiver.isPremiumUser && sender.isPremiumUser) {
      if (sender.rechargeAmount != 0) return res.status(400).send({ status: false, messaage: "you can't money transfer please bet first" })
      
      sender.walletAmount -= transforAmount;
      
      receiver.walletAmount += transforAmount;
      receiver.rechargeAmount += transforAmount;

      await sender.save();
      await receiver.save();
      
      const walletTransaction = await WalletTransactionModel.create({
        sender: sender.UID,
        receiver: receiver.UID,
        amount: transforAmount,
      })

      return res.status(200).json({
        message: "Transfer successful.",
        amount:transforAmount
       
      });
    } else {
         if (sender.rechargeAmount != 0) return res.status(400).send({ status: false, messaage: "you can't money transfer please bet first" })
      
      sender.walletAmount -= transforAmount;
      
      receiver.walletAmount +=transforAmount;
      receiver.rechargeAmount += transforAmount;

        await sender.save();
      await receiver.save();

      const walletTransaction = await  WalletTransactionModel.create({
      sender: sender.UID,
      receiver: receiver.UID,
      amount: transforAmount,
  
    });


      return res.status(200).json({
        message: "Transfer successful.",
        amount:amount
       
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}
const getWalletTransactions = async (req, res) => { 
  try {
    const userId = req.decodedToken.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (!userId) return res.status(403).send({ status: false, message: "please login first." });
    
    const user = await userModel.findById(userId)
    if (!user) return res.status(403).send({
      status: false, message: "user not found."
    })
     const transactions = await WalletTransactionModel.find({
      $or: [{ senderUID: user.UID }, { receiverUID: user.UID }],
    })
      // .populate('sender', 'username')
      // .populate('receiver', 'username')
      .sort({ createdAt: -1 })
       .skip(skip)
      .limit(limit)
    if (transactions.length < 0) return res.status(403).send({ status: false, message: "no transactions" })
    return res.status(200).send({ status: true, message: "success", data: transactions })
  } catch (error) { 
   console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = {
  signIn,
  signUp,
  sendOtpPhone,
  verifyOtp,
  resetPassword,
  updateUserProfile,

  getUserDetails,
  getDownlineDetails,
  getReferralStats,
  adminlogin,
  getAllUsers,
  activeUser,
  deactiveUser,
  changePassword,
  getCommissionByDate,
  walletToWalletTransactions,
  getUserDetailsByUserId,
  getWalletTransactions

}