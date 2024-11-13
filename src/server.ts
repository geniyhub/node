import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import path from "path";
import cookieParser from "cookie-parser";
import postRouter from './PostApp/postRouter'
import userRouter from "./UserApp/userRouter";

const getCurrentDate = require('./static/date');

const prisma = new PrismaClient();


const HOST = 'localhost'
const PORT = 7000

const app = express()

app.use(express.json())
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.use("/", postRouter);

app.get("/", (req: Request, res: Response) => {
    res.render('main')
})

app.use("/", userRouter)

app.get('/comments', async (req, res) => {
    try {
      const comments = await prisma.comment.findMany();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching comments' });
    }
  });

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
})