const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phoneNumber: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Number, required: true },
  password: { type: String, required: true },
  profileImage: {
    type: String,
    default: "https://i.pravatar.cc/40",
  },
});

module.exports = mongoose.model("User", userSchema);
