const mongoose = require('mongoose');
const Restaurant = require('../models/restaurant.model.js');
module.exports = {
    getDetails: (req, res) => {
        Restaurant.find().exec((err, restaurant) => {
            if (err) {
                return res.json({ 'success': false, 'message': 'Some Error' });
            }
            return res.json({ 'success': true, 'message': 'Restaurant fetched successfully', restaurant });
        });
    },

    addRestaurant: (req, res) => {
        try {
            const address = req.body.address;
            const borough = req.body.borough;
            const cuisine = req.body.cuisine;
            const grades = req.body.grades;
            const name = req.body.name;
            const restaurant_id = Number(req.body.restaurant_id);
            const newRestaturant = new Restaurant({ address, borough, cuisine, grades, name, restaurant_id });
            newRestaturant.save()
                .then(() => res.json('Restaurant added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        } catch (error) {

        }
    }

    , updateRestaurant: (req, res) => {
        Restaurant.findById(req.params.id)
            .then(restaurant => {
                restaurant.address = req.body.address;
                restaurant.borough = req.body.borough;
                restaurant.cuisine = req.body.cuisine;
                restaurant.grades = req.body.grades;
                restaurant.name = req.body.name;
                restaurant.restaurant_id = Number(req.body.restaurant_id);
                restaurant.save()
                    .then(() => res.json('Restaurant updated !'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }

    , getRestaurant: (req, res) => {
        Restaurant.find({ _id: req.params.id }).exec((err, restaurantItem) => {
            if (err) {
                return res.json({ 'success': false, 'message': 'Some Error' });
            }
            if (restaurantItem.length) {
                return res.json({ 'success': true, 'message': 'Todo fetched by id successfully', restaurantItem });
            }
            else {
                return res.json({ 'success': false, 'message': 'Todo with the given id not found' });
            }
        })
    }, deleteRestaurant: (req, res) => {
        Restaurant.findByIdAndDelete(req.params.id, (err, restaurantItem) => {
            if (err) {
                return res.json({ 'success': false, 'message': 'Some Error' });
            }

            return res.json({ 'success': true, 'message': restaurantItem.name + ' deleted successfully' });
        })
    }

}