const Users = require("../models/user");

const getUsersList = async(req,res) =>{
  const { email, password } = req.body;
  console.log(req.body);
  const doc = await Users.findOneAndUpdate(
    { email },
    { $set: { password } },
    { upsert: true, new: true }
  );
  console.log(JSON.stringify(doc));
  res.json(doc)
}

module.exports = {
  getUsersList
}