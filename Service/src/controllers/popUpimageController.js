
const Image = require('../models/popupImageModel');
const path = require('path');
const fs = require('fs');

const uploadImage = async (req, res) => {
    try {
        const image = new Image({
            filename: req.file.originalname,
            contentType: req.file.mimetype,
            image: req.file.buffer
        });

        
        await image.save();

        res.send('Image uploaded successfully!');
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

    const filename = images.filename;
    const imagePath = path.join(__dirname, '../../uploads', filename);

    const imageBinaryData = fs.readFileSync(imagePath);

    res.set('Content-Type', images.contentType);
    res.send(imageBinaryData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};


module.exports ={uploadImage,getImage}