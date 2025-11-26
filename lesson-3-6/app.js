const express = require("express");

// Express app

const app = express();

// Constants
PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname});   
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", {root: __dirname});   
});

// Redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about");   
});

// 404 Page (Middleware)
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root: __dirname});
});