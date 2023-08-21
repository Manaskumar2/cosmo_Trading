const userModel = require('../models/userModel')
const qrCodeModel = require('../models/QRcodeModel')
const validation = require('../validations/validation')


const uploadQrCode = async (req, res) => {
    try {
         const name =req.body.name
         const imageUrl = req.file.buffer.toString('base64')
        const uploadedBy = req.decodedToken.userId

        if (!validation.isValidBody(req.body)) return res.status(400).send({ status: false, message: "Invalid body" })
        if (!validation.isValidImage(imageUrl)) return res.status(400).send({ status: false, message: "Invalid imageUrl" })
        if (!validation.isValidName(name)) return res.status(400).send({ status: false, message: "Invalid name" })
        
        const qrCode = await qrCodeModel.create({ name: name, imageUrl: imageUrl, uploadedBy: uploadedBy })
        
    res.status(201).json(qrCode);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
}
module.exports = { uploadQrCode }
