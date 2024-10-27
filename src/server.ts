import express, { Express, Request, Response } from "express";
import path from "path";
import postRouter from './routes/postRouter'

const getCurrentDate = require('./static/date');

const SECRET_KEY = 'oioioi'

const HOST = 'localhost'
const PORT = 7000

const app = express()

app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.use("/", postRouter);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
})