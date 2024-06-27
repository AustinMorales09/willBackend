const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
  });
  
  const Pet = mongoose.model('Pet', petSchema);