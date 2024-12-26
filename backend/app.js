const express = require("express");
const app = express();

const mongoose = require('mongoose');

// Creating port
const PORT = process.env.PORT || 3000;
require('dotenv').config()

async function main() {
     await mongoose.connect(process.env.DB_URI);
     app.use("/", (req,res) =>{
      res.send("Book store server is running:");
     });
}

main().then(() => console.log("Mongodb connected successfully!")
).catch(err => console.log(err));

 app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
