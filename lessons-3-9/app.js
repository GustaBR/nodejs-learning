const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog.js");

// Constants
PORT = 3000;

// Support for .env variables
require("dotenv").config();

// Express app
const app = express();

// Database connection
const db_URI = process.env.db_URI;
mongoose.connect(db_URI)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

// Setting up view engine
app.set("view engine", "ejs");

// Middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

// Mongoose and Mongo sandbox routes
/* app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: "new Blog 2",
        snippet: "about my new blog!!",
        body: "more about my new blog!!"
    });

    blog.save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
});

app.get("/all-blogs", (req, res) => {
    Blog.find()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
    Blog.findById("692b0a489954960339759cc3")
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
});
*/

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

// Blog routes
app.get("/blogs", (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then((result) => {
        res.render("index", { title: "All Blogs", blogs: result })
      })
      .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a Blog"});
});

// 404 Page (Middleware)
app.use((req, res) => {
    res.status(404).render("404", { title: "404"});
});