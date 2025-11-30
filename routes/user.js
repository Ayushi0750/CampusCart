

const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const createUser = require("../models/user");
const createUser2 = require("../models/user2");

const campusConnection = mongoose.connection; 
const eventConnection = mongoose.createConnection(process.env.EVENT_DB_URL);

const User = createUser(campusConnection);
const User2 = createUser2(eventConnection);





// GET signup
router.get("/signup", (req, res) => {
  res.render("users/signup");
});

// POST signup
router.post("/signup", async (req, res, next) => {
  const { username, email, password, userType } = req.body; 
  const Model = userType === "event" ? User2 : User;

  try {
    const newUser = new Model({ username, email });
    const registeredUser = await Model.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect(userType === "event" ? "/events2" : "/listings");
    });
  } catch (err) {
    console.error("Signup error:", err);
    req.flash("error", err.message);
    res.redirect("/signup"); 
  }
});

// GET login
router.get("/login", (req, res) => {
  res.render("users/login");
});

// POST login
router.post("/login", (req, res, next) => {
  const { userType } = req.body;
  const strategy = userType === "event" ? "event-local" : "campus-local";

  passport.authenticate(strategy, (err, user, info) => {
    if (err || !user) {
      req.flash("error", info?.message || "Login failed");
      return res.redirect("/login"); 
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome back!");
      res.redirect(userType === "event" ? "/events2" : "/listings"); 
    });
  })(req, res, next);
});

// GET logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You have been logged out.");
    res.redirect("/login"); 
  });
});

// POST logout
router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You have been logged out.");
    res.redirect("/login"); 
  });
});

module.exports = router;
