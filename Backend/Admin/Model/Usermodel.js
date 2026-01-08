const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  profileImage: { type: String, default: "" },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  vehicleType: { type: String }, // e.g. "EV Car", "EV Bike"
  vehicleModel: { type: String },
  preferredConnector: { type: String }, // e.g. "CCS2", "Type2", "CHAdeMO"
  profileImage: { type: String }, // optional
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("User", userSchema);
