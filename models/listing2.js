//event schema

const mongoose = require("mongoose");

module.exports = (connection) => {
  const listing2Schema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: [
        "Music", "Business", "Comedy", "Technology", "Food",
        "Wellness", "Film", "Sports", "Art", "Festival"
      ],
      required: true
    },
    availableTickets: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true },

    
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User2",
      
    },

    
    reviews2: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review2"
      }
    ]
  }, { timestamps: true });

  return connection.model("Listing2", listing2Schema);
};

