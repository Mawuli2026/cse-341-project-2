const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  inStock: { type: Boolean, default: true },
  supplier: String,
  addedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
