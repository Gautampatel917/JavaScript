// Function that gets called as a callback
const fn = () => {
    console.log("Nothing");
};

// Generic callback function that takes an argument and another function
const callback = (arg, fn) => {
    console.log(arg);
    fn();
};

// Function to dynamically load a script and execute a callback after loading
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;

    // Execute the callback function only after the script is loaded
    sc.onload = () => callback("Loaded Successfully", fn);

    document.head.append(sc);
    console.log("Script loading started:", sc.src);
};

// Calling the function with a script URL and the callback function
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
