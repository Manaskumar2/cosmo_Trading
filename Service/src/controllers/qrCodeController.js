const userModel = require('../models/userModel')
const qrCodeModel = require('../models/QRcodeModel')
const validation = require('../validations/validation')


const uploadQrCode = async (req, res) => {
  try {
    const uploadedBy = req.decodedToken.userId
    const uploadedData = {};

    if (!uploadedBy) return res.status(400).json({ status: false, message: 'Please log in to upload image' });
    uploadedData.uploadedBy = uploadedBy;

    const { upiId,qrCode} = req.body;

    if (!upiId) {
      return res.status(400).json({ status: false, message: 'No UPI ID provided' });
    }

    if (!validation.checkUpiId(upiId)) {
      return res.status(400).json({ status: false, message: 'Invalid UPI ID' });
    }

    if (!qrCode) {
      return res.status(400).json({ status: false, message: 'No image data provided' });
    }

    uploadedData.upiId = upiId;
    uploadedData.qrCode = qrCode

    const qrCodeData = await qrCodeModel.create(uploadedData);

    res.status(201).json(qrCodeData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
}
const getAllImageURLs = async (req, res) => {
  try {
    const imageUrls = await qrCodeModel.find();

    res.status(200).json(imageUrls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
};
module.exports = { uploadQrCode,getAllImageURLs }
