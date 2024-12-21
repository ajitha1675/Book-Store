const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/connect")

// app.get("/",(req,res) =>{
//   res.send("Hello from backend side")
// });

//creating port
app.listen(process.env.PORT,()=>{
  console.log(`server started at port ${process.env.PORT}`);
});