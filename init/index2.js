//index2.js



const mongoose = require("mongoose");
const Listing2 = require("../models/listing2.js");
const data2 = require("./data2.js");

const MONGODB_URI = "mongodb://localhost:27017/eventDB";

async function updateData() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to MongoDB");

    for (let i = 0; i < data2.length; i++) {
      const listing = data2[i];

      // Validate before updating
      const doc = new Listing2(listing);
      const error = doc.validateSync();
      if (error) {
        console.error(` Validation failed at index ${i}:`, error.message);
        console.log("Invalid data:", listing);
        continue; 
      }

      
      await Listing2.findOneAndUpdate(
        { title: listing.title }, 
        listing,
        { upsert: true, new: true } 
      );
    }

    console.log("Listings updated successfully");
  } catch (error) {
    console.error(" Error updating listings:", error);
  } finally {
    await mongoose.disconnect();
    console.log(" Disconnected from MongoDB");
  }
}

updateData();
