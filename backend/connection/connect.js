const mongoose = require("mongoose");

const connect =  async()  =>{
  try {
      await mongoose.connect(`${process.env.MONGODB_URI}`);
      console.log("Connected to database");
      
  } catch (error) {
    console.log(error);   
  }
}

connect();