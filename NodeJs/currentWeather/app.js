const express = require("express");
const https = require("https")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/" , function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/index.html", function(req, res) {
  var city = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?appid=924783bda048569443e49dd6a03e5591&units=imperial&q=" + city;

  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      res.write("<p>" + desc + "</p>");
      res.write("<img src='https://openweathermap.org/img/wn/" + icon + "@2x.png'>");
      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
