// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruits');

const fruitSchema = new mongoose.Schema ({
  name: String,
  score: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({ name: 'Kiwi', score: 10 });
fruit.save().then(() => console.log("Successfully added Kiwi!"));

// mongoose.connection.close();
