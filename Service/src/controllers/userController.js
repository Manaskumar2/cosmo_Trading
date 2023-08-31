const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const cache = require("memory-cache");
const validation = require("../validations/validation")
const { generateUniqueReferralCode, generate7DigitUniqueId } = require("../util/util")


const twilio = require('twilio')("ACfe32400dd6c9efafd446cecf70102c0b", "7a4d599d44148524de82afe08e75b4d2");


const signUp = async (req, res) => {
  try {
    let data = req.body;

    let { phoneNumber, password, referralCode } = data

    if (validation.isValidBody(data)) return res.status(400).send({ status: false, message: "provide all required fields" })


    if (!validation.isValid(phoneNumber)) return res.status(400).send({ status: false, message: `PhoneNumber  is Required` })
    let uniquePhone = await userModel.findOne({ phoneNumber: phoneNumber })
    if (!validation.isValidPhone(phoneNumber)) return res.status(400).send({ status: false, message: `This PhoneNumber is Invalid` })
    if (uniquePhone) return res.status(400).send({ status: false, message: `This PhoneNumber  has already registered Please Sign In`, })

    if (!validation.isValidPwd(password)) return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters", })

    const hashedPassword = await bcrypt.hash(password, 10)

    const createUser = new userModel({
      phoneNumber: phoneNumber,
      password: hashedPassword,
      parentReferralCode: referralCode || null,
      referralCode: await generateUniqueReferralCode(),
      UID: await generate7DigitUniqueId()
    })
    if (referralCode) {
      findParentUser = await userModel.findOne({ referralCode: referralCode })

      if (!findParentUser) {
        return res.status(400).send({ status: false, message: `Invalid Referal Code`, })
      }

      findParentUser.downline.push({ user: createUser });
      await findParentUser.save();
    }
    await createUser.save()

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

    const findUser = await userModel.findOne({ phoneNumber: phoneNumber });

    if (!findUser) {
      return res.status(400).send({ status: false, message: "Invalid Phone Number" });
    }

    const correctPassword = findUser.password;

    const bcryptPass = await bcrypt.compare(password, correctPassword);
    if (!bcryptPass) {
      return res.status(400).send({ status: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ phoneNumber: findUser.phoneNumber, userId: findUser._id,isAdmin:findUser.isAdmin,UID:findUser.UID}, process.env.JWT_TOKEN, { expiresIn: '365d' });

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

    const findUser = await userModel.findOne({ phoneNumber: phoneNumber });

    if (!findUser) {
      return res.status(400).send({ status: false, message: "Invalid Phone Number" });
      }
      if(findUser.isAdmin!==true) return res.status(403).send({ status: false, message: "wrong url please go to the user login page" });

    const correctPassword = findUser.password;

    const bcryptPass = await bcrypt.compare(password, correctPassword);
    if (!bcryptPass) {
      return res.status(400).send({ status: false, message: "Incorrect Password" });
    }

    const token = jwt.sign({ phoneNumber: findUser.phoneNumber}, process.env.JWT_TOKEN, { expiresIn: '365d' });

    const response = {
      phoneNumber: findUser.phoneNumber,
      _id: findUser._id,
      authToken: token,
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
    console.log(otpToken, otp)

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

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);


    user.password = hashedPassword;

    await user.save()

    res.json({ message: 'Password reset successful.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
}

const updateUserProfile = async (req, res) => {

  try {
    if (!req.file) {
      return res.status(400).json({ status:false,message: 'No file provided' });
    }

    const { nickName } = req.body;

    if (!nickName) {
      return res.status(400).json({ status:false,message: 'No nickname provided' });
    }

    const user = await userModel.findById(req.decodedToken.userId);

    if (!user) {
      return res.status(404).json({status:false, message: 'User not found' });
    }

    user.nickName = nickName;
    user.profilePhoto = '/userImages/' + req.file.filename;

    await user.save();

    res.status(400).json({status:true, message: 'Profile updated successfully', data:user._doc });
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

  
    const commissionDetails = userDetails.commissions.map((commission) => ({
      date: commission.date,
      amount: commission.amount,
    }));

    return res.status(200).send({
      status: true,
      data: {
        userDetails,
        commissionDetails,
      },
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getDownlineDetails =async (req, res) => {
  try {
    const userId = req.params.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;



    const user = await userModel.findById(userId)
      .populate({
        path: 'downline.user',
        select: 'phoneNumber UID createdAt',
        options: {
          skip: (page - 1) * limit,
          limit: limit
        }
      })
      .exec();

    const downlineDetails = user.downline.map(downlineUser => ({
      phoneNumber: downlineUser.user.phoneNumber,
      UID: downlineUser.user.UID,
      referralDate: downlineUser.user.createdAt
    }));

    res.json({
      currentPage: page,
      totalPages: Math.ceil(user.downline.length / limit),
      totalUsers: user.downline.length,
      downlineDetails: downlineDetails
    });
  } catch (error) {
    console.error('Error fetching downline user details:', error);
    res.status(500).json({ error: 'An error occurred while fetching downline user details' });
  }
}

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
    console.log(sevenDaysAgo);
    const todayCount = await userModel.countDocuments({
      parentReferralCode:referralID,
      createdAt: { $gte: todayStart, $lte: todayEnd },
    });

    const weeklyCount = await userModel.countDocuments({parentReferralCode:referralID,
      createdAt: { $gte: sevenDaysAgo, $lte: todayEnd },
    });

    return res.status(200).json({
      status: true,
      data: {
        todayCount: todayCount,
        weeklyCount: weeklyCount,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const deactiveUser = async (req, res) => {
    try {
        const userId = req.params.userId
        if (!validation.isValidObjectId(adminId)) return res.status(400).send({ status: false, message: " ENTER VALID ADMIN ID" })

        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: " ENTER VALID USER ID" })
        const userData = await userModel.findOne({ _id: userId, isDeleted: false })
        if (!userData) return res.status(400).send({ status: false, message: "No user Exist in this Id" })

        await userModel.findByIdAndUpdate(userId, { isDeleted:true}, { new: true })
        return res.status(200).send({ status: true, message: "sucessfully deactivated ", userId: userData._id })


    } catch (error) {
        res.status(500).send({ status: false, error: error.message })

    }
}
const activeUser = async (req, res) => {
    try {


        const { userId } = req.params

        if (!validation.isValidObjectId(adminId)) return res.status(400).send({ status: false, message: " ENTER VALID ADMIN ID" })

         if(userId == adminId) return res.status(403).send({status:false,mesage:"you cannot active yourself"})

        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: " ENTER VALID USER ID" })
        const userData = await userModel.findOne({ _id: userId, isDeleted: false })
        if (!userData) return res.status(400).send({ status: false, message: "No user Exist in this Id" })

        await userModel.findByIdAndUpdate(userId, { isDeleted:false}, { new: true })
        return res.status(200).send({ status: true, message: "sucessfully activated ", userId: userData._id })


    } catch (error) {
        res.status(500).send({ status: false, error: error.message })

    }
}
    const  getAllUsers = async (req, res) => {
      try {
        const { queryPageIndex = 1, queryPageSize = 10, queryPageFilter, queryPageSortBy = [{ id: '_id', desc: false }] } = req.query;
        let query = {};
        let sortBy = queryPageSortBy[0].id;
        let sortOrder = queryPageSortBy[0].desc ? -1 : 1;
        
    
        if (queryPageFilter) {
          let searchRegex = new RegExp(queryPageFilter, "i");
          query = {
            $or: [
              { phone: searchRegex },
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
        return res.status(500).send({ status: false, message: error.message });
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
  getDownlineDetails,
  getReferralStats,
  adminlogin,
  getAllUsers,
  activeUser,
  deactiveUser

}