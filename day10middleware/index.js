const express = require("express")
const { dbconnect } = require("./config/dbconnect")
const { userModel } = require("./models/userModel")
const upload = require("./middleware/multer")

const app = express()
const PORT = 8080

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {

    let userData = await userModel.find({})
    console.log(userData)
    return res.render("home", { userData })
})
app.post("/add", upload, async (req, res) => {

    try {
        if (req.file) {
            console.log(req.file)
            req.body.userImage = "/uploads" + "/" + req.file.filename;
        }
        await userModel.create(req.body)
        console.log("user Added successfully")
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
})

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        await userModel.findByIdAndDelete(id)
        console.log("user Deleted successfully")
    } catch (error) {
        console.log(error)
    }
    return res.redirect("/")
})

app.get("/edit/:id", async (req, res) => {
    const { id } = req.params
    try {
        let updateData = await userModel.findById(id)
        res.render("update", { updateData })

    } catch (error) {
        console.log(error)
    }
})

app.post("/update", async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.body.id, req.body)
        console.log("updated successfully")
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
})
app.listen(PORT, (err) => {
    if (err) {
        console.log("server is not running at", PORT)
        return
    }
    console.log("server is running at", PORT)
    dbconnect()
})