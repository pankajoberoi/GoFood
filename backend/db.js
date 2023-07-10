const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://oberoipankaj449:MBk5u4S4ZwbYUtqA@cluster0.quayevz.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongodb = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const fetchedFoodItems = await mongoose.connection.db.collection("food_items").find({}).toArray();
        global.food_items = fetchedFoodItems;

        const fetchedFoodCategories = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.foodCategory = fetchedFoodCategories;

        console.log(global.food_items);
        console.log(global.foodCategory);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongodb;
