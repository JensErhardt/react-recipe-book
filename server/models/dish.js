const mongoose = require('mongoose');
const { Schema } = mongoose;

const dishSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  description: {
    type: String,
    required: [true, 'description is required']
  },
  image: String,
  Ingridients: [
    {
      ingridient: {
        type: Schema.Types.ObjectId,
        ref: 'ingridient'
      },
      quantity: Number,
      _id: false
    }
  ]
});  

module.exports = mongoose.model('Dish', dishSchema);