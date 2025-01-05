const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require('mongoose');

// Creating port
const PORT = process.env.PORT || 3000;
require('dotenv').config()

//middlewares
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
 }))

//routes
const bookRoutes = require('./books/book.route')
const orderRoutes = require('./orders/order.route')
const userRoutes = require('./users/user.route')

app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/auth",userRoutes)

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
