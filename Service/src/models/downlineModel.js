const mongoose = require('mongoose');

const downlineModel = new mongoose.Schema({
  parentUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  level1: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level2: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level3: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level4: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level5: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level6: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level7: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level8: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level9: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  level10: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

downlineModel.index({ level1: 1 });
downlineModel.index({ level2: 1 });
downlineModel.index({ level3: 1 });
downlineModel.index({ level4: 1 });
downlineModel.index({ level5: 1 });
downlineModel.index({ level6: 1 });
downlineModel.index({ level7: 1 });
downlineModel.index({ level8: 1 });
downlineModel.index({ level9: 1 });
downlineModel.index({ level10: 1 });


downlineModel.methods.getTotalUsersInLevels = async function () {
  let totalUsersInLevels = {};

  for (let i = 1; i <= 10; i++) {
    const levelKey = `level${i}`;
    totalUsersInLevels[levelKey] = this[levelKey] ? this[levelKey].length : 0;
  }

  return totalUsersInLevels;
};

module.exports = mongoose.model('Downline', downlineModel);
