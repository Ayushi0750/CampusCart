
//review schema for events
const mongoose = require("mongoose");

module.exports = (connection) => {
  const review2Schema = new mongoose.Schema({
    comment: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User2"   
  }
    

  });

  return connection.model("Review2", review2Schema);
};

