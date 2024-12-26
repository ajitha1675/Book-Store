const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    category: {
       type: String,
       required: true
    },
    trending:{
      type: Boolean,
      required: true
    },
    coverImage:{
      type: Boolean,
      required: true
    },
    oldPrice:{
      type: Number,
    },
    newPrice:{
      type: Number,
    },
    createdAt:{
      type: Date,
      default: Date.now
    }
},{
  timestamps: true,
});