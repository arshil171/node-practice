 const {default : mongoose} = require("mongoose")
  const dbconnect = async () =>{
    await mongoose.connect("mongodb://127.0.0.1/arshil")   // collection of database

    console.logg("dtabase is connected")
  }

  module.exports ={dbconnect}