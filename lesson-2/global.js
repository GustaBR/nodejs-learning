// Global object

global_examples = () => {
    global.setTimeout(() => {
        console.log("In the timeout");
        clearInterval(interval);
    }, 3000);

    const interval = setInterval(() => {
        console.log("In the interval");
    }, 1000);
}

dirname_examples = () => {
    console.log(__dirname);
    console.log(__filename);
}

dirname_examples();