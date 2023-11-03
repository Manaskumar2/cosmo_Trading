const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: String,
  winningAmount: Number,
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
