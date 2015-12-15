//mongoose!
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var customerSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
})

mongoose.model('customer_model', customerSchema);
customerSchema.plugin(uniqueValidator);