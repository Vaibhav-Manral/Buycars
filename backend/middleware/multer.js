const storage = require("../config/cloudinaryconfig.js")
const multer=require("multer")


const upload= multer({ storage: storage });

module.exports=upload;