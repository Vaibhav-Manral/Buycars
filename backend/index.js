const express=require("express");
const app=express();
const signup=require("./controllers/Signupcontroller");
const login=require("./controllers/Logincontroller");
const DealerController=require('./controllers/Dealercontroller');

app.use(express.json());

app.use("/signup",signup)
app.use("/login",login)
app.use('/Dealer',DealerController)

module.exports=app;
