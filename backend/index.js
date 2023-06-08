const express=require("express");
const app=express();
const signup=require("./controllers/Signupcontroller");

app.use(express.json());

app.use("/signup",signup)



module.exports=app;
