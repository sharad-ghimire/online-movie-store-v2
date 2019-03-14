const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  poster_url: { type: String },
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number }
});

module.exports = mongoose.model('Movie', MovieSchema);
