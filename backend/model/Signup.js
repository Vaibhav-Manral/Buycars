const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

const SignupSchema =new mongoose.Schema(
    {
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

    SignupSchema.pre("save",function(next){
        if(!this.isModified("password"))
        {
            return next()
        }
        else{
            this.password = bcrypt.hashSync(this.password,8);
            return next();
        }
    })

    SignupSchema.methods.checkPassword= function (password){
        return bcrypt.compareSync(password, this.password); // this.password is password in db 
                                                            // and password is user password
    }

    module.exports=mongoose.model("Signup",SignupSchema)