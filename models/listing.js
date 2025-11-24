//listing schema
const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js");

const listingSchema = new Schema ({
     title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    url:{
     type: String,
     default: 'https://source.unsplash.com/featured/?book',
  }
},
  price: {
    type: Number,
    required: true
  },
  
  location: String,       
  country: String,

  seller: {
    name: String,
    college: String,
    category: {
      type: String,
      enum: ['hostler', 'day scholar', 'faculty']
    },
    contact: {
      phone: String,
      email: String
    }
  },
  dateListed: {
    type: Date,
    default: Date.now
  },
  isBarterAvailable: {
  type: Boolean,
  default: false
},
barterConditions: {
  type: String,
  default: ""
},
owner:{
  type:Schema.Types.ObjectId,
  ref:"User",
},
reviews:[
  {
    type:Schema.Types.ObjectId,
    ref:"Review",
  },
],
});

listingSchema.post("findOneAndDelete", async(listing)=>{
if(listing){
  await Review.deleteMany({_id:{$in: listing.reviews }});
}
});


const Listing= mongoose.model("Listing" ,listingSchema);

module.exports= Listing;

