


//user schema for events



const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const user2Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String }
});


user2Schema.plugin(passportLocalMongoose, { usernameField: "email" });


module.exports = (conn) => conn.model("User2", user2Schema);
