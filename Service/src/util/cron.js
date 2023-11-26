const cron = require("node-cron");
const userModel = require("../models/userModel");

const startCron = () => {
  // Schedule a task to run every day at midnight in the Asia/Kolkata timezone
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

