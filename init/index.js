
  

//index.js


const mongoose = require("mongoose");
const { data } = require("./data.js"); 
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/campuscart";

main()
  .then(() => {
    console.log(" Connected to MongoDB");
    return initDB();
  })
  .catch((err) => {
    console.error(" Connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log(" Validating each listing...");

    for (let i = 0; i < data.length; i++) {
      const listing = data[i];
      const doc = new Listing(listing);
      const error = doc.validateSync();
      if (error) {
        console.error(` Listing at index ${i} failed validation:`, error.message);
        console.log("Listing data:", listing);
        return; 
      }
    }
    await Listing.insertMany(data);
    console.log(" Data was initialized successfully");
  } catch (err) {
    console.error(" Error initializing data:", err);
  } finally {
    mongoose.connection.close();
  }
};


