//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
  title: String,
  text: String
});

const Article = mongoose.model("articles", articleSchema);

app.route("/articles")
  .get(function(req, res) {
    Article.find({}, function(err, foundArticles){
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })
  .post(function(req, res) {
    var title = req.body.title;
    var text = req.body.content;

    var article = new Article({
      title: title,
      text: text
    });

    article.save();
    res.send("Successfully added 1 article");
  })
  .delete(function(req, res) {
    Article.deleteMany(function(err){
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully delete all articles.");
      }
    });
  })

app.route("/articles/:title")
  .get(function(req, res) {
    Article.find({title: req.params.title}, function(err, foundArticles){
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
