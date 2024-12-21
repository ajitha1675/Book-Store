const mongoose = require("mongoose")

const order = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
  },
  book:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "books",
  },
  status:{
    type:String,
    default: "order placed",
    enum:["Order placed","Out for delivery","Delivered","Cancelled"]
  }
},{timestamps: true}
);

module.exports = mongoose.model("order",order);