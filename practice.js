function mainFunction(name, callback) {
    console.log(`The name is ${name}`);
    setTimeout(() => {
        console.log('The output from setTimeout function')
        callback(name);
    }, 2000);
}

function sayHi(name) {
    console.log(`Hey ${name}`);
}

mainFunction('gautam', sayHi);