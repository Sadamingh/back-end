//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today = new Date();
  var dows = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = dows[today.getDay()];
  res.render("list", {day: day});

});

app.listen(3000, function(){
  console.log("Server start on port 3000");
});
