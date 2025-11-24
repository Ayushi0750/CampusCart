const express= require("express");
const mongoose = require('mongoose');
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js"); 
const Listing = require("../models/listing.js");
const User = require("../models/user");


const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    return next(new ExpressError(400, error.details.map(el => el.message).join(', ')));
  }
  next();
};

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    return next(new ExpressError(400, error.details.map(el => el.message).join(', ')));
  }
  next();
};

 const isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash('error', 'Listing not found');
    return res.redirect('/listings');
  }
  if (!listing.owner.equals(req.user._id)) {
    req.flash('error', 'You do not have permission');
    return res.redirect(`/listings/${id}`);
  }
  next();
};

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in!");
    return res.redirect("/listings/login"); 
  }
  next(); 
};




// index route
router.get("/", wrapAsync( async(req, res,next) => {
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
   
})
);



// create route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    
    console.log("Request body:", req.body);

    const newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    await newListing.save();

    res.redirect("/listings");
  })
);

 //new route
router.get("/new",isLoggedIn,
   wrapAsync(async (req, res, next) => {
  res.render("listings/new");
}));



//barterlisting 
router.get("/barter",wrapAsync (async (req, res,next) => {
  const listings = await Listing.find({ isBarterAvailable: true });
  res.render("listings/barterlisting", { listings });
})
);




//show route
router.get("/:id", wrapAsync(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(); 
  }

  const listing = await Listing.findById(req.params.id)
  .populate("owner")
  .populate({
      path: "reviews",
      populate: { path: "author" } 
    })
  if (!listing) {
    return next(new ExpressError("Listing not found", 404));
  }

  res.render("listings/show", { listing });
}));



// Edit Route 
router.get("/:id/edit",isLoggedIn ,isOwner,
  
   wrapAsync(async (req, res,next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    return res.status(404).send("Listing not found");
  }
  res.render("listings/edit", { listing });
})
);


//update route

router.put("/:id",isLoggedIn,isOwner,
    validateListing,
   wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  // Convert barter field
  req.body.isBarterAvailable = req.body.isBarterAvailable === "true";

  await Listing.findByIdAndUpdate(id, req.body, { runValidators: true });
  res.redirect(`/listings/${id}`);
}));





// Delete Route
router.delete("/:id",isLoggedIn ,isOwner,
   async (req, res,next) => {
  const { id } = req.params;
  try {
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    console.error("Error deleting listing:", err);
    res.status(500).send("Failed to delete listing");
  }
});




//barter
router.get("/:id/barter", wrapAsync(async (req, res,next) => {
  const listing = await Listing.findById(req.params.id);
  res.render("listings/barter", { listing }); 
})
);

//barter response

router.post("/:id/barter-request", wrapAsync(async (req, res,next) => {
  const { offer } = req.body;
  res.send("Barter request submitted!");
})
);



//reviews post route

router.post("/:id/reviews",
  isLoggedIn,validateReview, wrapAsync( async (req, res) => {
  
  try {
    const listing = await Listing.findById(req.params.id);
    const review = new Review(req.body); 
    review.author = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error("Review submission failed:", err);
    res.status(500).send("Error submitting review.");
  }
}));



// review delete route

router.delete("/:id/reviews/:reviewId",isLoggedIn, isOwner,async (req, res) => {
 
  const { id, reviewId } = req.params;

  try {
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
    return; 
  } catch (err) {
    console.error("Failed to delete review:", err);
    if (!res.headersSent) {
      res.status(500).send("Error deleting review.");
    }
  }
});




module.exports= router;