const express = require('express')
const path = require('path')

const getCurrentDate = require('./static/date');

const HOST = 'localhost'
const PORT = 7000

const app = express()

app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.get("/", (req, res) => {
    res.render("main.ejs")
})

app.get('/date', (req, res) => {
    const currentDate = getCurrentDate();
    res.send(`Current Date and Time: ${currentDate}`);
});


app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
});