var express = require('express');
const Dish = require('../models/dish');

var router = express.Router();

// Route to get all dishes
router.get('/', (req, res, next) => {
  Dish.find().populate('Ingridients')
    .then(dishes => {
      res.json(dishes);
    })
   .catch(err => console.log(err))
});
// Route to get one specific dish
router.get('/:id', (req, res, next) => {
  console.log("dishDetailRoute")
  Dish.findById(req.params.id)
    .then(dishDetail => {
      res.json(dishDetail)
    })
    .catch(err => console.log(err))
});
// Route to update one specific dish
router.put('/:id', (req, res, next) => {

  Dish.findByIdAndUpdate(req.params.id)
    .then(dishDetail => {
      //PUT QUERY HERE<-----------------------------
    })
});
//Route to create one new dish
router.post('/', (req, res, next) => {
  let { name, description, image, ingridients } = req.body
  Dish.create({ name, description, image, ingridients })
    .then(dish => {
      res.json({
        success: true,
        dish
      })
    })
});

module.exports = router;