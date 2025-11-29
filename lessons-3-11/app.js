const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

// Blog routes
app.use("/blogs", blogRoutes);

// 404 Page (Middleware)
app.use((req, res) => {
    res.status(404).render("404", { title: "404"});
});