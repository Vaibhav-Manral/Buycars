const express=require("express");
const Router=express.Router();
const SignupSchema=require("../model/Signup");

Router.post("",async(req,res)=>{
try{
    const register= await SignupSchema.create({
        email:req.body.email,
        password:req.body.password,
        age:req.body.age,
        gender:req.body.gender
    });
    return res.status(201).send(register);
}
catch(err){
return res.status(401).send(err.message);
}
}
)

Router.get("",async(req,res)=>{
    try{
        const user  = await SignupSchema.find().lean().exec();
        return res.status(201).send(user);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
})

module.exports=Router;