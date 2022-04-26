// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruits');

const fruitSchema = new mongoose.Schema ({
  name: String,
  score: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema)

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    })
  }
});
