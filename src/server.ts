import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import path from "path";
import cookieParser from "cookie-parser";
import postRouter from './PostApp/postRouter'
import userRouter from "./UserApp/userRouter";
import commentRouter from './CommentApp/commentRouter';
import cors from "cors"
import postRouterApi from "./PostApp/postRouterApi";
import commentRouterApi from "./CommentApp/commentRouterApi";
import userApiRouter from "./UserApp/userRouterApi";

const getCurrentDate = require('./static/date');

const prisma = new PrismaClient();


const HOST = 'localhost'
const PORT = 7000

const app = express()

app.use(cors({
  origin : ["http://localhost:3000"]
}))

app.use(express.json())
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))



app.get("/", (req: Request, res: Response) => {
    res.render('main')
})

app.use("/", postRouter);
app.use("/", userRouter)
app.use('/', commentRouter)
app.use("/api/post/", postRouterApi)
app.use("/api/comment/", commentRouterApi)
app.use("/api/profile/", userApiRouter)

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