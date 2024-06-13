/* 
variable categories by how there treated in memory

#primitive

7 types: String, Number, Boolean, null, undefined, Symbol, BegInt 

*/
const number = 100;
const number2 = 100.20;
const str1 = "That is string example";
const boolTrue = true;

// symbol is new in ES6 and does not have value or name property

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);

const bigNumber = 293959857907390n;
console.log(typeof (bigNumber));

/* 
#reference/ non-primitive

Array, Object, Function 

 */

const arr = ["Shaktiman", "naagraj", "doga"];

const obj = {
    name : "Gautam",
    age : 19,
    profession: "IT"
}

console.table(obj);

const Fname = function(){
    console.log("i am function");
}

Fname();
console.log(typeof Fname);