
const Image = require('../models/popupImageModel');
const aws=require("aws-sdk");




//  aws.config.update({
//     accessKeyId: "AKIAY3L35MCRZNIRGT6N",
//     secretAccessKey: "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",
//     region: "ap-south-1"
// })
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
        Key: "adv/" + file.originalname, //HERE 
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

const uploadImage = async (req, res) => {
    try {
      
          
        let files= req.files
        if(files && files.length>0){
           
          let uploadedFileURL = await uploadFile(files[0])
          const createImage = await Image.create({ imageUrl: uploadedFileURL })
            res.status(201).send({msg: "file uploaded succesfully", data:createImage})
        }
        else{
            res.status(400).send({ msg: "No file found" })
        }
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getImage = async (req, res) => {
  try {
    const images = await Image.findOne().sort({ createdAt: -1 });

    if (!images) {
      return res.status(404).send('No images found');
    }


    res.status(200).send({status:true,message:"sucessfull",data:images});
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};


module.exports ={uploadImage,getImage}