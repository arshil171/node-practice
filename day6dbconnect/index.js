const express = require("express")
const { dbconnect } = require("./config/dbconnect")

const app = express()
 
const PORT = 8080

app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.get("/" , (req , res)=>{
    res.send("hello world")
})

app.post("/add" , (req , res)=>{
    console.log(req.body)

    return res.send("Added successfully")
})

app.listen(PORT , (err) =>{
     if(err){
        console.log("Server is not running " , PORT)
        return
     }
     console.log("Server is running at " , PORT)
     dbconnect()
})