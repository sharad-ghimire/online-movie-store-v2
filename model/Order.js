const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    movies: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
