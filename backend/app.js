const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/connect");
const user = require("./routes/user.route");

app.use(express.json());

//routes
app.use("/api/v1",user);
// app.use("/api/v1", user);

//creating port
app.listen(process.env.PORT,()=>{
  console.log(`server started at port ${process.env.PORT}`);
});