const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({    // cloudinary configuration
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

const storage = new CloudinaryStorage({ //cloud storage
    cloudinary: cloudinary,
    params: {
      folder: "Attryb",  
// folder created on cloudinary if not than it will create automatically
    },
  });

module.exports=storage;