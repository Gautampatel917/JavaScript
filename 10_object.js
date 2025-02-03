//singleton    - when we declare object like literals that not create singleton

//literals : object value that you literally write in your program/app.
// Object literals
// Object.create

const mysym = Symbol("key1");
console.log(mysym);

const JsUser = {
    name: "Gautam",
    age: 18,
    profession: "Software Developer",
    "fullName": "Gautam malaviya",      //=> we can not access this value by dot operator
    // mysym : "mySymbol"  not use as symbol
    [mysym]: "Gautam"
}

console.log(JsUser.name);
console.log(JsUser["name"]);        //=> second way to access object value
// console.log(typeof JsUser.mysym);   
console.log(typeof JsUser[mysym]);  //=> When we refer symbol

// Object.freeze(JsUser);

JsUser.greeting = function () {
    console.log("Hello greeting");
}

JsUser.greetingTwo = function () {
    console.log(`Hello user ${this.name}`);
}

console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());