//mongoose!
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  name: {type: String, required: false},
  product: {type: String, required: false},
  quantity: {type: Number, required: false},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
})

mongoose.model('order_model', orderSchema);