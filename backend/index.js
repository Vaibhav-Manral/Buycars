const express=require("express");
const app=express();
const signup=require("./controllers/Signupcontroller");
const login=require("./controllers/Logincontroller");

app.use(express.json());

app.use("/signup",signup)
app.use("/login",login)

module.exports=app;
