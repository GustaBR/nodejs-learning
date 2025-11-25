const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream("./docs/blog5.txt");

readStream.on("data", (chunk) => {
    console.log("======== NEW CHUNK ========");
    console.log(chunk);
    writeStream.write("\nNEW CHUNK\n");
    writeStream.write(chunk);
});

// Piping. Same as above
readStream.pipe(writeStream);