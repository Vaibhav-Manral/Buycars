const mongoose=require("mongoose");

const SignupSchema =new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true}
    },
   
    {
        versionKey:false,
        timestamps:true
    }
    )
    module.exports=mongoose.model("Signup",SignupSchema)