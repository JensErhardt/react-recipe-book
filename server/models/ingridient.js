const mongoose = require('mongoose');

const IngridientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  unity: String
});

module.exports = mongoose.model('Ingridient', IngridientSchema);