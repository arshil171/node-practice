const {default : mongoose} = require("mongoose")

const dbconnect = async()=>{
     await mongoose.connect('mongodb://127.0.0.1/arshil');
    console.log("database successfully connected")
}

module.exports = {dbconnect}