


// models/user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userType: {
    type: String,
    enum: ["campus", "event"],   
    required: true
  }
}, { timestamps: true });


userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("User", userSchema);
module.exports = User;

const User = mongoose.model("User", userSchema);

module.exports = User;
