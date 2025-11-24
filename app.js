require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const Listing = require("./models/listing.js");
const eventConnection = mongoose.createConnection(process.env.EVENT_DB_URL);
const createListing2Model = require("./models/listing2.js");
const Listing2 = createListing2Model(eventConnection);

const createReview2Model = require("./models/review2.js");
const Review2 = createReview2Model(eventConnection);

const createUser2Model = require("./models/user2.js");
const User2 = createUser2Model(eventConnection);

const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const { listingSchema, reviewSchema } = require("./schema.js");
const { listing2Schema, review2Schema } = require("./schema2.js");

const Review = require("./models/review.js");
const listingRouter = require("./routes/listing.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRoutes = require("./routes/user");
const flash = require("connect-flash");

const MONGO_URL = process.env.MONGO_URL;



main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currUser= req.user;
  next();
});

const LocalStrategy2 = require("passport-local");

// CampusCart users
passport.use("campus-local", new LocalStrategy2(
  { usernameField: "email" },
  User.authenticate()
));

// EventDB users
passport.use("event-local", new LocalStrategy2(
  { usernameField: "email" },
  User2.authenticate()
));

passport.serializeUser((user, done) => {
  done(null, { id: user._id, model: user.constructor.modelName });
});

passport.deserializeUser(async (obj, done) => {
  const { id, model } = obj;
  try {
    let user;
    if (model === "User2") {
      user = await User2.findById(id);
    } else {
      user = await User.findById(id);
    }
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



app.use("/listings", userRouter);
app.use("/listings", listingRouter);

app.use((req, res, next) => {
  const flashError = req.flash("error");
  if (flashError.length) {
    console.log(" Passport failure message:", flashError);
  }
  next();
});

// Event page
const validateListing2 = (req, res, next) => {
  const { error } = listing2Schema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error.details.map((el) => el.message).join(", "));
  } else {
    next();
  }
};

const validateReview2 = (req, res, next) => {
  const { error } = review2Schema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error.details.map((el) => el.message).join(", "));
  } else {
    next();
  }
};

const isOwner = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You must be logged in!');
    return res.redirect('/listings/login');
  }

  const { id } = req.params;
  const listing = await Listing2.findById(id); 

  if (!listing) {
    req.flash('error', 'Event not found');
    return res.redirect('/events2');
  }

  if (!listing.owner || !listing.owner.equals(req.user._id)) {
    req.flash('error', 'You do not have permission');
    return res.redirect(`/events2/${id}`);
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

// Index route
app.get(
  "/events2",
  wrapAsync(async (req, res, next) => {
    const listings = await Listing2.find({});
    console.log("Fetched listings:", listings);
    res.render("listings2/index2", { listings });
  })
);

// NEW - Show form to create event
app.get(
  "/events2/new",isLoggedIn,
  wrapAsync(async (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.flash("error", "You must be logged in!");
      return res.redirect("/listings/login"); 
    }
    res.render("listings2/create2");
  })
);

const patchImageUrl = (req, res, next) => {
  if (!req.body.imageUrl || req.body.imageUrl.trim() === "") {
    req.body.imageUrl = "https://source.unsplash.com/featured/?event";
  }
  next();
};

app.post(
  "/events2",
  isLoggedIn,           
  patchImageUrl,
  validateListing2,
  wrapAsync(async (req, res, next) => {
    req.body.isBarterAvailable = req.body.isBarterAvailable === "true";

    const listing = new Listing2(req.body); 
    listing.owner = req.user._id;           
    await listing.save();

    req.flash("success", "Event created!");
    res.redirect("/events2");
  })
);

// SHOW - Show one event
app.get(
  "/events2/:id",
  wrapAsync(async (req, res, next) => {
    const listing = await Listing2.findById(req.params.id)
      .populate("owner") 
      .populate({
        path: "reviews2", 
        populate: { path: "author" }
      });
    console.log("Listing owner value:", listing.owner);
    res.render("listings2/show2", { listing });
  })
);

// EDIT - Show edit form
app.get(
  "/events2/:id/edit",isLoggedIn,isOwner,
  wrapAsync(async (req, res, next) => {
    const listing = await Listing2.findById(req.params.id);
    res.render("listings2/edit2", { listing });
  })
);

// UPDATE - Update event
app.put(
  "/events2/:id",
  validateListing2,isLoggedIn,isOwner,
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    req.body.isBarterAvailable = req.body.isBarterAvailable === "true";
    await Listing2.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/events2/${id}`);
  })
);

// DELETE - Remove event
app.delete(
  "/events2/:id",isLoggedIn,isOwner,
  wrapAsync(async (req, res, next) => {
    await Listing2.findByIdAndDelete(req.params.id);
    res.redirect("/events2");
  })
);

// CREATE review for an event
app.post(
  "/events2/:id/reviews2",isLoggedIn,
  validateReview2,
  wrapAsync(async (req, res, next) => {
    const listing = await Listing2.findById(req.params.id);
    const review = new Review2(req.body);
    review.author = req.user._id;
    listing.reviews2.push(review);
    await review.save();
    await listing.save();
    req.flash("success", "Review added!");
    res.redirect(`/events2/${listing._id}`);
  })
);

// DELETE review for an event
app.delete(
  "/events2/:id/reviews2/:reviewId", isLoggedIn, isOwner,
  wrapAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    await Listing2.findByIdAndUpdate(id, { $pull: { reviews2: reviewId } });
    await Review2.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/events2/${id}`);
  })
);

// 404 handler
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// Error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  try {
    res.status(statusCode).render("error.ejs", { message });
  } catch (renderErr) {
    console.error(" Error rendering error.ejs:", renderErr);
    res.status(500).send("Internal Server Error");
  }
});

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

