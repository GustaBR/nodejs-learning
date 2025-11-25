const fs = require("fs");

// Reading Files
fs.readFile("./docs/blog1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// Writing Files
fs.writeFile("./docs/blog2.txt", "hello, world", () => {
    console.log("File was written");
});

// Directories
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder created");
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder deleted");
    });
}

fs.writeFile("./docs/deleteme.txt", "Placeholder content", () => {
    console.log("File created 2")
});

// Deleting Files
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted");
    })
}