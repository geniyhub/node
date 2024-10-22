const express = require('express')
const path = require('path')
const postRouter = require('./routes/postRouter');

const getCurrentDate = require('./static/date');

const HOST = 'localhost'
const PORT = 7000

const app = express()

app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))



// app.get('/posts', (req, res) => {
//     res.render('posts', postsData);
// })

// app.post('/post/create', (req, res) => {
//     const newPost = req.body;
//     const newId = postsData.posts.length + 1;
//     newPost.id = newId;

//     postsData.posts.push(newPost);

//     res.status(201).json({ message: 'Post created successfully', post: newPost });
// });

// app.get('/post/:id', (req, res) => {
//     const postId = parseInt(req.params.id);
//     const post = postsData.posts.find(p => p.id === postId);

//     if (post) {
//         res.render('post', { post });
//     } else {
//         res.render('post-not-found', { postId });
//     }
// });

app.use("/", postRouter);

// app.get('/date', (req, res) => {
//     const currentDate = getCurrentDate();
//     res.send(`Current Date and Time: ${currentDate}`);
// })


app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
})