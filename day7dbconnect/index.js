const express = require("express")
const { dbconnect } = require("./config/dbconnect")
const { userModel } = require("./models/userModel")

const app = express()

const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", async (req, res) => {
    let response = await userModel.find({})

    return res.json({
        message: response,
    })
})

app.post("/add", async(req, res) => {
    try {
        console.log(req.body)
        await userModel.create(req.body)
        console.log("Added")
        res.send("addded")
    } catch (err) {
        console.log(err)
    }
})

app.delete("/delete/:id", async (req, res) => {

    console.log(req.params.id)

    await userModel.findByIdAndDelete(req.params.id, req.body)
    return res.send("deleted")

})

app.put("/update/:id", async (req, res) => {
    console.log(req.params.id)

    await userModel.findByIdAndUpdate(req.params.id, req.body)
    return res.send("updated Successfully")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server is not running at ", PORT)
        return
    }
    console.log("Server is ruunning at", PORT)
    dbconnect()
})