const express = require("express")
const app = express()
const adminRoute = require("./routes/adminRoute")
const newsRoute = require("./routes/newsRoute")
const emailRoute = require("./routes/emailRoute")
const bodyParser = require("body-parser")
require("./DBCon")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoute)
app.use("/news", newsRoute)
app.use("/email", emailRoute)

app.listen(3000, () => {
    console.log("Server Started Succesfully at 3000")
})
