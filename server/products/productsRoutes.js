const express = require("express");

const {getproductsList} = require("./productsController");

const router = express.Router();

router.get("/list",getproductsList);
//router.post("/add",addproducts);


module.exports = router;