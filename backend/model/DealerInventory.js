const mongoose=require("mongoose");

const DealerInventory = new mongoose.Schema(
    {
    CarId:{type:String,required:true},  
    CarName:{type:String,required:true},
    CarManufacturer:{type:String,required:true},
    Picture:{type:String,required:true},
    Odometer:{type:Number,required:true},
    MajorScratches:{type:Number,required:true},
    OriginalPaint:{type:String,required:true},
    Numberofaccident:{type:String,required:true},
    PreviousBuyer:{type:Number,required:true},
    RegistrationPlace:{type:String,required:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
    )
    module.exports=mongoose.model("DealerInventory",DealerInventory)