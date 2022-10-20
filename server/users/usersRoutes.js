const express = require("express");

const {getUsersList} = require("./usersController");

const router = express.Router();

router.post("/list", getUsersList);
//router.get("/list/:emailId",getUser);

module.exports = router;