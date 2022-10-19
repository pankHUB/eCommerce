const express= require("express");

const productRoutes = require("./products/productsRoutes");
const usersRoutes = require("./users/usersRoutes");

const router = express.Router();

router.use("/products",productRoutes);
router.use("/users",usersRoutes);

module.exports = router;