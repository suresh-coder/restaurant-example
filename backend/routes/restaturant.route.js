const router = require('express').Router();
let RestaurantController = require('../controller/restaurant.controller');

router.route('/').get(RestaurantController.getDetails);

router.route('/add').post(RestaurantController.addRestaurant);

router.route('/:id').get(RestaurantController.getRestaurant);

router.route('/:id').delete(RestaurantController.deleteRestaurant);

router.route('/update/:id').post(RestaurantController.updateRestaurant);

module.exports = router;