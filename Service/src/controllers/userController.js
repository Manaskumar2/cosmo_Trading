const userModel = require("../models/userModel")
const commissionModel = require("../models/commissionModel")
const WalletTransactionModel = require("../models/walletToWalletModel")
const BettingHistory =  require("../models/battingHistoryModel")
const jwt = require("jsonwebtoken")
const validation = require("../validations/validation")
const { generateUniqueReferralCode, } = require("../util/util");
const downlineModel = require("../models/downlineModel")


const twilio = require('twilio')("ACfe32400dd6c9efafd446cecf70102c0b", "7a4d599d44148524de82afe08e75b4d2");


// const signUp = async (req, res) => {
//   try {
//     const data = req.body;
//     const { phoneNumber, password, referralCode, userName } = data;

//     // Validate input data
//     if (!phoneNumber || !password || !referralCode || !userName) {
//       return res.status(400).send({ status: false, message: "Please provide all required fields" });
//     }

//     if (!validation.isValidName(userName)) {
//       return res.status(400).send({ status: false, message: "Please enter a valid Name" });
//     }

//     if (!validation.isValidPhone(phoneNumber)) {
//       return res.status(400).send({ status: false, message: "Invalid phone number" });
//     }

//     if (!validation.isValidPwd(password)) {
//       return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and contain a combination of numbers, letters, and special characters" });
//     }

//     // Check if the phoneNumber is already registered
//     const existingUser = await userModel.findOne({ phoneNumber });
//     if (existingUser) {
//       return res.status(400).send({ status: false, message: "This phone number is already registered. Please sign in." });
//     }

//     // Check if the referralCode is valid
//     const parentDetails = await userModel.findOne({ referralCode });
//     if (!parentDetails) {
//       return res.status(400).send({ status: false, message: "Invalid referral code" });
//     }

//     // Generate a unique referral code for the new user
//     const latestUser = await userModel.findOne().sort({ createdAt: -1 });
//     const latestUID = latestUser ? latestUser.UID : 0;
//     const UID = latestUID + 1;

//     // Create the user
//     const createUser = await userModel.create({
//       phoneNumber,
//       password,
//       parentReferralCode: referralCode,
//       referralCode: await generateUniqueReferralCode() + UID,
//       UID,
//       name: userName,
//       parentUserUid: parentDetails.UID
//     });

//     // Add the new user to the parent's downline
//     parentDetails.downline.push({ user: createUser._id });
//     await parentDetails.save();

//     res.status(201).json({ status: true, message: "User created successfully", data: createUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ status: false, message: "An error occurred while processing the request" });
//   }
// }
// Recursive function to add user to downline for each level
const addToLevelWithoutDuplicates = async (downline, levelName, userId, currentLevel) => {
  for (let i = 1; i <= currentLevel; i++) {
    const levelField = `level${i}`;
    if (downline[levelField].includes(userId)) {
      // User already exists in a lower level, do not add to the current level
      return;
    }
  }
  downline[levelName].push(userId);
};

const recursivelyAddToDownline = async (newUser, parentDetails, currentLevel) => {
  if (currentLevel > 10 || !parentDetails.parentUserUid) {
    return;
  }

  const parentDetail = await userModel.findOne({ UID: parentDetails.parentUserUid });

  if (!parentDetail) {
    console.error("Parent details not found");
    return;
  }
  const parentUserDownline = await downlineModel.findOne({ parentUser: parentDetail._id });

  if (!parentUserDownline) {
    const newDownline = await downlineModel.create({ parentUser: parentDetail._id });
    await addToLevelWithoutDuplicates(newDownline, `level${currentLevel}`, newUser._id, currentLevel);
    await newDownline.save();
  } else {
    await addToLevelWithoutDuplicates(parentUserDownline, `level${currentLevel}`, newUser._id, currentLevel);
    await parentUserDownline.save();
  }
  await recursivelyAddToDownline(newUser, parentDetail, currentLevel + 1);
};


const signUp = async (req, res) => {
  try {
       const data = req.body;
    const { phoneNumber, password, referralCode, userName } = data;
 
    if (!phoneNumber || !password || !referralCode || !userName) {
      return res.status(400).send({ status: false, message: "Please provide all required fields" });
    }

    if (!validation.isValidName(userName)) {
      return res.status(400).send({ status: false, message: "Please enter a valid Name" });
    }

    if (!validation.isValidPhone(phoneNumber)) {
      return res.status(400).send({ status: false, message: "Invalid phone number" });
    }

    if (!validation.isValidPwd(password)) {
      return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and contain a combination of numbers, letters, and special characters" });
    }
    const existingUser = await userModel.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).send({ status: false, message: "This phone number is already registered. Please sign in." });
    }


    const parentDetails = await userModel.findOne({ referralCode });
    if (!parentDetails) {
      return res.status(400).send({ status: false, message: "Invalid referral code" });
    }

    const latestUser = await userModel.findOne().sort({ createdAt: -1 });
    const latestUID = latestUser ? latestUser.UID : 0;
    const UID = latestUID + 1;


    const createUser = await userModel.create({
      phoneNumber,
      password,
      parentReferralCode: referralCode,
      referralCode: await generateUniqueReferralCode() + UID,
      UID,
      name: userName,
      parentUserUid: parentDetails.UID,
    });

   
    const parentUserDownline = await downlineModel.findOne({ parentUser: parentDetails._id });

    if (!parentUserDownline) {
      const newDownline = await downlineModel.create({ parentUser: parentDetails._id });
      newDownline.level1.push(createUser._id);
      await newDownline.save();
      
    } else {
    
      parentUserDownline.level1.push(createUser._id);
      await parentUserDownline.save();

      
      
    }
    await recursivelyAddToDownline(createUser, parentDetails, 2);
    res.status(201).json({ status: true, message: "User created successfully", data: createUser });
  } catch (error) {
    console.error("Top-level error:", error);
    res.status(500).send({ status: false, message: "An error occurred while processing the request" });
  }
};


const updateDownlineForExistingUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();

    for (const user of allUsers) {
      const parentDetails = await userModel.findOne({ UID: user.parentUserUid });

      if (!parentDetails) {
        console.error(`Parent details not found for user ${user.UID}`);
        continue;
      }

      const parentUserDownline = await downlineModel.findOne({ parentUser: parentDetails._id });

      if (!parentUserDownline) {
        const newDownline = await downlineModel.create({ parentUser: parentDetails._id });
        await addToLevelWithoutDuplicates(newDownline, 'level1', user._id);
        await newDownline.save();
      } else {
        await addToLevelWithoutDuplicates(parentUserDownline, 'level1', user._id);
        await parentUserDownline.save();
      }

      await recursivelyAddToDownline(user, parentDetails, 2);
    }

    console.log('Downline structure updated for existing users.');
    res.status(200).send({ status: true, message: "successful" });
  } catch (error) {
    console.error('Error updating downline structure:', error);
    res.status(500).send({ status: false, message: "An error occurred while processing the request" });
  }
};
const signIn = async (req, res) => {
  try {
    const data = req.body;
    const { phoneNumber, password } = data;

    if (!phoneNumber || !password) {
      return res.status(400).send({ status: false, message: "Provide both phone number and password to login" });
    }

    const findUser = await userModel.findOne({ phoneNumber: phoneNumber });

    if (!findUser) {
      return res.status(400).send({ status: false, message: "Invalid Phone Number " });
    }

    const correctPassword = findUser.password;

    if(password!== correctPassword){
      return res.status(400).send({ status: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ phoneNumber: findUser.phoneNumber, userId: findUser._id,isAdmin:findUser.isAdmin,UID:findUser.UID}, process.env.JWT_TOKEN, { expiresIn: '1d' });
    
    findUser.token = token
    await findUser.save();
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


const getUserDetailsByUID = async (req, res) => { 
  try {
        const UID = parseInt(req.query.UID);

    if (UID) {
      const userDetails = await userModel.findOne({ UID: UID }).lean().select({ downline: 0 });

      if (!userDetails) return res.status(404).send({ status: false, message: "User not found" });

      return res.status(201).send({ status: true, message: 'successful get details', data: userDetails });
    }
    if(!UID) return res.status(404).send({status:false,message:"UID must be required"})

  } catch (error) {
      console.error(error);
    res.status(500).json({status:false, message: 'An error occurred while get user profile' });
  }

}
const getUserDetails = async (req, res) => {
  try {
    const UID = req.params.UID;
    let userDetails;
    let todayBettingAmount = 0;

    if (UID) {
      const key = `userDetails_${UID}`;
      userDetails = await userModel.findOne({ UID: UID });
      if (!userDetails) {
        return res
          .status(400)
          .send({ status: false, message: "Please Enter correct UID" });
      }

      // Calculate today's total betting amount for the user
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      const bettingHistory = await BettingHistory.find({
        user: userDetails._id, 
        date: { $gte: today },
      });

      if (bettingHistory.length > 0) {
        todayBettingAmount = bettingHistory.reduce(
          (total, record) => total + record.amount,
          0
        );
      }
    }

    return res.status(200).send({
      status: true,
      data: {
        userDetails,
        todayBettingAmount,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getUserDetailsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    let userDetails;
    

    if (userId) {
      const key = `userDetails_${userId}`;
      userDetails = await userModel.findById({ _id: userId });
      if (!userDetails) {
        return res
          .status(400)
          .send({ status: false, message: "Please Enter correct userId" });
      }
    }
  

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
//     const  getAllUsers = async (req, res) => {
//       try {
//         const { queryPageIndex = 1, queryPageSize = 20, queryPageFilter, queryPageSortBy = [{ id: '_id', desc: false }] } = req.query;
        
//         let query = {isAdmin:false};
//         let sortBy = queryPageSortBy[0].id;
//         let sortOrder = queryPageSortBy[0].desc ? -1 : 1;
      
    
//         if (queryPageFilter) {
//           let searchRegex = new RegExp(queryPageFilter, "i");
//           query = {
//             $or: [
//               { phoneNumber: searchRegex },
//             ],
//           };
//         }

//         let getUsers;
        
//         const count = await userModel.countDocuments(query);

//         getUsers = await userModel
//           .find(query)
//           .sort({ [sortBy]: sortOrder })
//           .limit(parseInt(queryPageSize))
//           .skip((parseInt(queryPageIndex) - 1) * parseInt(queryPageSize))
//           .exec();

//         if (getUsers.length < 1) {
//           return res
//             .status(400)
//             .send({ status: false, message: "No user found" });
//         }

//         const response = {
//           getUsers,
//           totalPages: Math.ceil(count / parseInt(queryPageSize)),
//           currentPage: parseInt(queryPageIndex),
//           totalCount: count,
//         };

//         return res.status(200).send({ status: true, message: "Successful", response });

//       } catch (error) {
//         console.error(error)
//         return res.status(500).send({ status: false, message: error.message });
//     }
// };
const getAllUsers = async (req, res) => {
  try {
    let { queryPageIndex = 1, queryPageSize = 20, queryPageFilter, bettingAmountSort} = req.query;

    let query = {isAdmin:false};
    if(queryPageFilter){
      query.UID=parseInt(queryPageFilter)
    }


 
       const totalWalletAmountResult = await userModel.aggregate([
      {
        $match: query,
      },
      {
        $group: {
          _id: null,
          totalWalletAmount: { $sum: "$walletAmount" },
        },
      },
    ]);

    const totalWalletAmount = totalWalletAmountResult[0] ? totalWalletAmountResult[0].totalWalletAmount : 0;
      const count = await userModel.countDocuments(query);

        if (bettingAmountSort) {
            bettingAmountSort = bettingAmountSort.trim();
            
            if (["-1", "1"].indexOf(bettingAmountSort) < 0) {
                return res.status(400).send({ status: false, message: "enter the Valid key for bettingAmount Sort", });
            }
            if (bettingAmountSort == "1") {
              const getUsers = await userModel.find(query).sort({ dailyTotalBettingAmount: 1 })
                .limit(parseInt(queryPageSize))
                .skip((parseInt(queryPageIndex) - 1) * parseInt(queryPageSize))
                .exec();
              
    const response = {
      getUsers,
      totalPages: Math.ceil(count / parseInt(queryPageSize)),
      currentPage: parseInt(queryPageIndex),
      totalCount: count,
      totalWalletAmount,
    };
                return res.status(200).send({
                    status: true,
                    message: 'Success',
                    response
                })
            } else if (bettingAmountSort == "-1") {
                
              const getUsers = await userModel.find(query)
                .sort({ dailyTotalBettingAmount: -1 })
                .limit(parseInt(queryPageSize))
                .skip((parseInt(queryPageIndex) - 1) * parseInt(queryPageSize))
                .exec();
              
              
             const response = {
              getUsers,
      totalPages: Math.ceil(count / parseInt(queryPageSize)),
      currentPage: parseInt(queryPageIndex),
      totalCount: count,
      totalWalletAmount,
      totalUsers:count
    };
                return res.status(200).send({
                    status: true,
                    message: 'Success',
                    response
                })
            }
        }
  
  

    const getUsers = await userModel
      .find(query)
      .limit(parseInt(queryPageSize))
      .skip((parseInt(queryPageIndex) - 1) * parseInt(queryPageSize))
      .exec();

    if (getUsers.length < 1) {
      return res.status(400).send({ status: false, message: "No user found" });
    }
 
    const response = {
      getUsers,
      totalPages: Math.ceil(count / parseInt(queryPageSize)),
      currentPage: parseInt(queryPageIndex),
      totalCount: count,
      totalWalletAmount,
      totalUsers:count
    };

    return res.status(200).send({ status: true, message: "Successful", response });
  } catch (error) {
    console.error(error);
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
    } else if (receiver.isPremiumUser && !sender.isPremiumUser) {
      if(sender.isDeleted == true) return res.status(403).send({status:false,message:"your account is Temporary Ban Please contact your administrator"})
      if (sender.rechargeAmount != 0) return res.status(401).send({ status: false, messaage: "you can't money transfer please bet first" })

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
        if(sender.isDeleted == true) return res.status(403).send({status:false,message:"your account is Temporary Ban Please contact your administrator"})
         if (sender.rechargeAmount != 0) return res.status(401).send({ status: false, messaage: "you can't money transfer please bet first" })
      
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

    if (!userId) return res.status(403).send({ status: false, message: "Please log in first." });

    const user = await userModel.findById(userId);
    if (!user) return res.status(403).send({
      status: false,
      message: "User not found."
    });

    const UID = parseInt(user.UID);

    // Find sender transactions where the user is the sender
    const senderTransactions = await WalletTransactionModel.find({ sender: UID })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Find receiver transactions where the user is the receiver
    const receiverTransactions = await WalletTransactionModel.find({ receiver: UID })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Calculate the overall total sending amount
    const totalSent = await WalletTransactionModel.aggregate([
      {
        $match: { sender: UID }
      },
      {
        $group: {
          _id: null,
          totalSent: { $sum: "$amount" }
        }
      }
    ]);

    // Calculate the overall total receiving amount
    const totalReceived = await WalletTransactionModel.aggregate([
      {
        $match: { receiver: UID }
      },
      {
        $group: {
          _id: null,
          totalReceived: { $sum: "$amount" }
        }
      }
    ]);

    const count = {
      senderTransactions:await WalletTransactionModel.countDocuments({ sender: UID }),
      receiverTransactions: await WalletTransactionModel.countDocuments({ receiver: UID })
    };

    const response = {
      currentPage: page,
      totalPages: {
        senderTransactions: Math.ceil(count.senderTransactions / limit),
        receiverTransactions: Math.ceil(count.receiverTransactions / limit)
      },
      totalSent: totalSent[0] ? totalSent[0].totalSent : 0,
      totalReceived: totalReceived[0] ? totalReceived[0].totalReceived : 0,
      senderTransactions,
      receiverTransactions,
    };

    if (senderTransactions.length === 0 && receiverTransactions.length === 0) {
      return res.status(402).send({ status: false, message: "No transactions" });
    }

    return res.status(200).send({ status: true, message: "Success", data: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  signIn,
  signUp,
  sendOtpPhone,
  verifyOtp,
  resetPassword,
  updateUserProfile,

  getUserDetails,
  getReferralStats,
  adminlogin,
  getAllUsers,
  activeUser,
  deactiveUser,
  changePassword,
  getCommissionByDate,
  walletToWalletTransactions,
  getUserDetailsByUserId,
  getWalletTransactions,
  updateDownlineForExistingUsers,
  getUserDetailsByUID

}