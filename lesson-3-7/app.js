const express = require("express");

// Express app
const app = express();

// Setting up view engine
app.set("view engine", "ejs");

// Constants
PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    const blogs = [
        {title: "Blog 1", snippet: "snippet for blog 1"},
        {title: "Blog 2", snippet: "snippet for blog 2"},
        {title: "Blog 3", snippet: "snippet for blog 3"}
    ];
    
    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a Blog"});
});

// 404 Page (Middleware)
app.use((req, res) => {
    res.status(404).render("404", { title: "404"});
});