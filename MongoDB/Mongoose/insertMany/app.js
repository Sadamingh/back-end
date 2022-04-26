// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruits');

const fruitSchema = new mongoose.Schema ({
  name: String,
  score: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema)

const apple = new Fruit({ name: 'apple', score: 5 });
const banana = new Fruit({ name: 'banana', score: 7 });
const orange = new Fruit({ name: 'orange', score: 2 });

Fruit.insertMany([apple, banana, orange], console.log("Successfully added 3 items!"));
