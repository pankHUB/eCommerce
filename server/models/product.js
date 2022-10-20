const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, default: null },
    productDetails: { type: String, default: null },
    price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);