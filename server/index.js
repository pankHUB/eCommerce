const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

const router = require("./routes");

//Need before start server
const uri = "";

app.use(cors())

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api",router);


app.use("/",(req,res)=>{
  res.send("Server is Up and Running");
});

mongoose.connect(uri).then((client) => {
  console.log(client);
  app.listen(4000, () => {
    console.log("Server is up and Running in port 4000");
  });
})
.catch((e) => {
  console.log("Error : " + e);
});

