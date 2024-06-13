//Immediately Invoked Function Expressions IIFE
//when you wont to execute function immediately

(function connect() {
    console.log(`connected`)
})();    //=> second() is execution and first definition also there are use for manage global scope variable pollution

((name) => {
    console.log(`Hello ${name}, this is also db connection`)
})("gautam");       //=> put semicolon at the end.
//if not, it will be a syntax error because JavaScript interpreter thinks that this code block continues below.

//Global scope pollution : Global scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes