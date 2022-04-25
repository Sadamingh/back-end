// jshint esversion:6

const express = require("express");

const app = express();
app.use(express.static("public"));

var items = [];

app.get("/", function(req, res){
  res.sendFile(__dirname + "/dicee.html");
});

app.listen(3000, function(){
  console.log("Server start on port 3000");
});
