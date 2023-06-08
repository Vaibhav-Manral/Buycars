const app=require("./index");
const connect=require("./config/db");
require('dotenv').config();

app.listen(process.env.PORT, async () => {
    try {
      await connect();
      console.log("listening on port 2020");
    } catch(err){
      console.log(err.message);
    }
  });