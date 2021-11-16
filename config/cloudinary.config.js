/* // config/cloudinary.config.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('cloudinary-multer');

const app = express;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png'],
    folder: 'red-leather-lab-ltd' // The name of the folder in cloudinary
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  }
});

const upload = multer({
    storage: storage,
  });

const parser = multer({ storage: storage });
 
app.post('/upload', parser.single('imageUrl'), function (req, res) {
    res.json(req.file);
  });

// storage: storage
module.exports = multer({ storage, upload });
 */