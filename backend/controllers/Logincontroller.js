const express=require("express");
const Router=express.Router();
const SignupSchema=require("../model/Signup")
const jwt =require("jsonwebtoken")

const newToken = (user) => { // receive user and add token
    return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY,{ expiresIn: 60*60});
}

Router.post("",async(req,res)=>{
try{
    const user=await SignupSchema.findOne({email:req.body.email});

    if(!user)
{
    return res.status(400).send("Either email or password is incorrect");
}

const match=user.checkPassword(req.body.password);

    if(!match){
        return res.status(400).send("Either email or password is incorrect")
    }

const token=newToken(user);
return res.status(201).send({user,token});
}
catch(err){
    return res.status(500).send({ message: err.message})
    }
})

module.exports=Router;