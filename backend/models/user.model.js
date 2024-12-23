const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      collation: { locale: "en", strength: 2 }, // Case-insensitive uniqueness
    },
    email: {
      type: String,
      required: true,
      unique: true,
      collation: { locale: "en", strength: 2 }, // Case-insensitive uniqueness
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "default.jpg",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    favourites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book", // Ensure the referenced model matches
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book",
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
