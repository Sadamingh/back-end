//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

  var today = new Date();
  if (today.getDate() === 6 || today.getDate() === 0) {
    res.send("yeah, weekend");
  } else {
    res.sendFile(__dirname + "/index.html");
  }

});

app.listen(3000, function(){
  console.log("Server start on port 3000");
});
