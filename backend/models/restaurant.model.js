const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    address: { type: Object },
    borough: { type: String },
    cuisine: { type: String },
    grades:
    {
        type: [
            {
                date: { type: Date, required: [true, "Date is required"] },
                grade: { type: String, required: [true, "Grade is required"] },
                score: { type: Number, required: [true, "Score is required"] }
            },

        ],
        validate: {
            validator: function (array) {
                return array.length > 0;
            }
        },
        required: true
    },

    name: { type: String, required: [true, "Name is required"] },
    restaurant_id: { type: Number, required: [true, "Restaurant Id is required"] }
}, {
    timestamps: true
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;