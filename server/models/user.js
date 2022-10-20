const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required:true, index: true },
    password: { type: String, required:true}
});

module.exports = mongoose.model("User", userSchema);