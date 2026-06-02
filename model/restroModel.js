const mongoose = require("mongoose")

const restroModel = new mongoose.Schema({
    name:String,
    cuisine:[String],
    location:String,
    rating:Number,
    reviews:[String],
    website:String,
    phoneNumber:String,
    openHours:String,
    priceRange:String,
    reservationsNeeded:Boolean,
    isDeliveryAvailable:Boolean,
    menuUrl:String,
    photos:[String]

})

const mongooseSchema = mongoose.model("restraunt",restroModel)

module.exports = mongooseSchema