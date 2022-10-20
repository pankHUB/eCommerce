const express = require("express");

const {getproductsList, addProducts} = require("./productsController");

const router = express.Router();

router.get("/list",getproductsList);
router.post("/add",addProducts);


module.exports = router;