const mongoose = require("mongoose")

const dbconnect = async() =>{
    await mongoose.connect("mongodb://127.0.0.1/ram")
    console.log("dbconnected successfully")
}

module.exports = {dbconnect}