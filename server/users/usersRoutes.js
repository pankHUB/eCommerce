const express = require("express");

const {getUsersList} = require("./usersController");

const router = express.Router();

router.get("/list", getUsersList);
//router.get("/list/:userId",getUser);

module.exports = router;