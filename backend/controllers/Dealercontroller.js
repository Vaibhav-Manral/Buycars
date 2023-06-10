const express=require("express");
const Router=express.Router();
const DealerSchema=require('../model/DealerInventory');
const upload =require('../middleware/multer');

Router.post("",upload.single("Picture"),async(req,res)=>{
try{
    const DealerData = await DealerSchema.create({
        CarName:req.body.CarName,
        CarManufacturer:req.body.CarManufacturer,
        Picture:req.file.path,
        Odometer:req.body.Odometer,
        MajorScratches:req.body.MajorScratches,
        OriginalPaint:req.body.OriginalPaint,
        Numberofaccident:req.body.Numberofaccident,
        PreviousBuyer:req.body.PreviousBuyer,
        RegistrationPlace:req.body.RegistrationPlace,
    })
    return res.status(201).send(DealerData);
}
catch(err){
    return res.status(501).send(err.message)
}
})


Router.get("",async(req,res)=>{
    try{
        const DealerData = await DealerSchema.find().lean().exec();
        return res.status(501).send(DealerData) 
    }
    catch(err){
        return res.status(501).send(err.message)
    }
})

module.exports=Router;