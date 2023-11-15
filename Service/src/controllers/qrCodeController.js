const userModel = require('../models/userModel')
const qrCodeModel = require('../models/QRcodeModel')
const validation = require('../validations/validation')
const aws=require("aws-sdk");

 aws.config.update({
    accessKeyId: "AKIAYBX2OOU6YIKIMVOO",
    secretAccessKey: "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",
    region: "ap-south-1"
})
let uploadFile= async ( file) =>{
   return new Promise( function(resolve, reject) {
   
    let s3= new aws.S3({apiVersion: '2006-03-01'}); 

    var uploadParams= {
        ACL: "public-read",
        Bucket: "cosmotrade",  //HERE
        Key: "qrCode/" + file.originalname, //HERE 
        Body: file.buffer
    }


    s3.upload( uploadParams, function (err, data ){
        if(err) {
            return reject({"error": err})
        }
        console.log("file uploaded succesfully")
        return resolve(data.Location)
    })
  })
}



const uploadQrCode = async (req, res) => {
  try {
    const uploadedBy = req.params.uploadedBy
    
    const uploadedData = {};

    if (!uploadedBy) return res.status(400).json({ status: false, message: 'Please log in to upload image' });
    uploadedData.uploadedBy = uploadedBy;

    const { upiId,options} = req.body;

    
    if (!options) {
      return res.status(400).json({ status: false, message: 'please choose on of the options' });
    }
    if(!validation.isValidOptions(options)) return res.status(400).json({ status: false, message:"Invalid options. Options Should be ['Normal', 'Fast']"})
    uploadedData.options = options

    if (!upiId) {
      return res.status(400).json({ status: false, message: 'No UPI ID provided' });
    }


    if (!validation.checkUpiId(upiId)) {
      return res.status(400).json({ status: false, message: 'Invalid UPI ID' });
    }
    uploadedData.upiId = upiId;

let files = req.files;

if (files && files.length > 0) {
  let uploadedFileURL = await uploadFile(files[0]);

  if (!uploadedFileURL) {
    return res.status(400).send({
      status: false,
      message: "Failed to upload the file or invalid file format.",
    });
  }

  uploadedData.qrCode = uploadedFileURL;
} else {
  return res.status(400).send({
    status: false,
    message: "Please upload a file.",
  });
}

const qrCodeData = await qrCodeModel.create(uploadedData);

    res.status(201).json(qrCodeData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
}
const getAllImageURLs = async (req, res) => {
  try {
    const imageUrls = await qrCodeModel.find().sort({createdAt: -1});

    res.status(200).json(imageUrls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
};
module.exports = { uploadQrCode,getAllImageURLs }
