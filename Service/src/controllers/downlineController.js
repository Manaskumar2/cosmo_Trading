
const Downline = require('../models/downlineModel');
const userModel = require('../models/userModel');

const getAllUsersAtLevel = async (req, res) => {
  const { levelNumber } = req.query;
  const parentUserId = req.decodedToken.userId;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const UID = req.query.uid;

  try {
    if (UID) {
      const userDetails = await userModel.findOne({ UID: UID })
      if (!userDetails) return res.status(404).send.send({ status: false, message: "user not found" })
      return res.status(200).send({status:true,message:"sucessfull",userDetails})
    }
    const levelField = `level${levelNumber}`;

    const skip = (page - 1) * limit;

    const downline = await Downline.findOne(
      { parentUser: parentUserId },
      levelField
    ).populate({
      path: levelField,
      model: 'users',
      options: {
        skip: skip,
        limit: parseInt(limit),
      },
    });

    if (!downline) {
      return res.status(404).json({ message: 'Downline not found' });
    }

   
    const totalUsers = await Downline.findOne(
      { parentUser: parentUserId },
      levelField)

    res.status(200).json({
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalUsers[levelField].length/limit),
      users: downline[levelField],
      totalUsers: totalUsers[levelField].length,

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const calculateTotalTeam = async (req, res) => {
  try {
    const parentUserId = req.params.userId;
    const levelNumber = req.query.levelNumber;
    const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
     const skip = (page - 1) * limit;

    if (!levelNumber) {
      const downline = await Downline.findOne({ parentUser: parentUserId });
      if (!downline) {
        return res.status(404).send({ satus: false, message:"Downline not found"})
      }

      let totalUsers = 0;

      for (let i = 1; i <= 10; i++) {
        const levelField = `level${i}`;
        totalUsers += downline[levelField] ? downline[levelField].length : 0;
      }

      return res.status(200).send({
        status: true,
        message: "Successfully get total team",
        totalTeam: totalUsers,
      });
    } else {
     
      
      const levelField = `level${levelNumber}`;

        const totalUsers = await Downline.findOne(
      { parentUser: parentUserId },
          levelField)
      
      const downline = await Downline.findOne(
        { parentUser: parentUserId },
        levelField
      ).populate({
        path: levelField,
        model: 'users',
        select: 'UID phoneNumber name',
        options: {
        skip: skip,
        limit: parseInt(limit),
      },
      });

      if (!downline) {
        return res.status(404).send({ satus: false, message: `Downline not found at level ${levelNumber}` });
      }

      return res.status(200).send({
        status: true,
        message: `Successfully get users at level ${levelNumber}`,
        users: downline[levelField],
        currentPage: parseInt(page),
      totalPages: Math.ceil(totalUsers[levelField].length/limit),
      users: downline[levelField],
      });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: `Error: ${error.message}` });
  }
};


module.exports = {
  getAllUsersAtLevel,
  calculateTotalTeam
};
