const express = require('express');
const cors = require('cors');
const app = express();

const router = require("./routes");

//app.use(cors());

app.use(express.json());

app.use("/api",router);


app.use("/",(req,res)=>{
  res.send("Server is Up and Running");
});

app.listen(4000, () => {
  console.log("Server is up and Running in port 4000");
})