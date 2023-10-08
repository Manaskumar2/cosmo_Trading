const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  // filename: String,
  // contentType: String,
  // image: Buffer
  imageUrl: String,
},{timestamps:true});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
