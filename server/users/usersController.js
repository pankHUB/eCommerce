const users = require("./users");

const getUsersList = ((req,res) =>{
 res.json(users)
})

module.exports = {
  getUsersList
}