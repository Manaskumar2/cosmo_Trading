const cron = require("node-cron");
const userModel = require("../models/userModel");

const startCron = () => {
  
  cron.schedule('0 0 * * *', async () => {
    try {
     
      await userModel.updateMany({}, { $set: { lastRechargeAmount: 0,dailyTotalBettingAmount: 0 } });
      console.log('Daily reset completed.');
    } catch (error) {
      console.error('Error during daily reset:', error);
    }
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  });
};

module.exports = { startCron };

