const mongoose = require("mongoose");

const doctors = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phoneNumber: { type: String, required: true, unique: true },
    experience: { type: String, required: true },
    fees: { type: String, required: true },
    about: { type: String, required: true },
    degree: { type: String, required: true },
    address: { type: String, required: true },
    speciality: { type: String, required: true },
    // date: { type: String, required: true },
    password: { type: String, required: true }
});

const doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctors);
module.exports = doctor;
