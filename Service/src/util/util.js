
const userModel = require("../models/userModel");
const { updateUserWalletSocket, users } = require("../socket/sockets");



const generateUniqueReferralCode = async () => {
    const referralCodeLength = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';
    for (let i = 0; i < referralCodeLength; i++) {
      referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const user = await userModel.findOne({ referralCode: referralCode })
    if (!user) {
        return referralCode;
    }
    return await generateUniqueReferralCode() 
}


//   const  generate7DigitUniqueId  = async() =>{
//   try {
   
//     const timestamp = Date.now().toString();

//     function getRandomNumber(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min;
//     }

//     const randomPortion = getRandomNumber(100, 1000);

//     const uniqueId = timestamp + randomPortion;
   

//     const sevenDigitId = uniqueId.slice(-7);

//     return sevenDigitId;
//   } catch (error) {
//     console.error('Error generating unique ID:', error);
//     throw error;
//   }
// }


function createUIDGenerator() {
  // Initialize currentNumber with 11111
  let currentNumber = 11111;

 
  async function generateUID() {
    const uid = currentNumber;
    currentNumber++; 
    return uid;
  }

  
  function setCurrentNumber(value) {
    currentNumber = value;
  }

  return { generateUID, setCurrentNumber };
}

const { generateUID, setCurrentNumber } = createUIDGenerator();



let counter = 0;

async function generateUniqueNumber() {
  const now = new Date();

  const year = now.getFullYear().toString().padStart(4, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const uniqueNumber = `${year}${month}${day}${counter.toString().padStart(4, '0')}`;
  counter++;

  return uniqueNumber;
}
let counter2 = 0;

async function generateUniqueNumber2() {
  const now = new Date();

  const year = now.getFullYear().toString().padStart(4, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const uniqueNumber = `${year}${month}${day}${counter2.toString().padStart(4, '0')}`;
  counter2++;

  return uniqueNumber;
}

const updateUserWallet = async({userId, walletAmount, commissionAmount, winningAmount, betId,}) => {
  const updateData = {};
  if(walletAmount){
    updateData.walletAmount = walletAmount;
  }
  if(commissionAmount){
    updateData.commissionAmount = commissionAmount;
  }
  if(winningAmount){
    updateData.winningAmount = winningAmount;
  }

  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    {
      $inc: updateData
    },
    {
      new: true 
    }
  );


  const socketId = users[userId]; 
  if(socketId){
    const updatedData = {walletAmount: updatedUser.walletAmount};
    if(winningAmount && betId){
      updatedData.winningAmount = winningAmount;
      updatedData.betId = betId;
    }
    updateUserWalletSocket(socketId, JSON.stringify(updatedData));
  }
}

module.exports = {
   generateUniqueReferralCode ,
  generateUniqueNumber,
  generateUID,
  setCurrentNumber,
   generateUniqueNumber2,
   updateUserWallet
  }