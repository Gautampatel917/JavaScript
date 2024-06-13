
//callback function : one function call another function , first function load there own property then there are load other function property

const fn = () => {
    console.log("Nothing")
}
= () => {
}


    const callback = (arg, fn) => {
        console.log(arg)
        fn()
    }
    console.log();
    const loadScript = (src, callback) => {
        let sc = document.createElement("script");
        sc.src = src;
        sc.onload = callback("loadSuccessFully", fn);
        document.head.append(sc)
        console.log(sc.src);
    }


    loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)