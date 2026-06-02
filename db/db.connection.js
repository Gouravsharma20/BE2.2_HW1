const mongoose = require("mongoose")

require("dotenv").config()

const mongoUrl = process.env.MONGODB_URI

const dbConnection = async() => {
    try {
        await mongoose.connect(mongoUrl)
        console.log("Database connected successfully")

    } catch {
        throw error
    }
}

module.exports = dbConnection

