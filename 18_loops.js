//for loop in array

let fruits = ["apple", "mango", "banana", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
    console.log("for",fruits[i]);
}

//----------------------------------------------------------//

//use const for creating array
const color = ["white", "Black", "Blue"];
// color = ["Green", "Orange"]     //error no changeable
color.push("Green"); //But we use array method for add the value in array 
console.log(color);

//when use reference variable use const is good practice...

//------------------------------------------------------------//

//while loop in array
let i = 0;
while (i <= fruits.length) {
    console.log("while",fruits[i]);
    i++;
}

//----------------------------------------------------------//

//for of loop in array
for (let fruit of fruits) {
    console.log("forOF", fruit);
}

//----------------------------------------------------------//

//for each loop in array
fruits.forEach((fruit, index) => {
    console.log("forEach",`${index}: ${fruit}`);
});

//----------------------------------------------------------//
//find element in array using methods

let result = fruits.indexOf('black');   //returns first occurrence of black so it returns 1
                                        //if not found then return -1
console.log(`The number ${result} has the value Black`);

result = fruits.lastIndexOf('black'); //returns last occurrence of black so it returns 2
console.log(`The number ${result} has the value Black`);

let isExist = 'blue' in fruits;         //check if blue exist or not
console.log(`Is Blue Exists? ${isExist}`);

let arr = ['red','green'];  

//----------------------------------------------------------//

// use as Parameters
fruits.forEach(function(fruit){
    console.log(`value: ${fruit}`);
})

fruits.forEach((items)=>{
    console.log(`value1: ${items}`);
})

//----------------------------------------------------------//

//for in loop in array
for (let index in fruits) {
    console.log("forIN",fruits[index]);
}

//----------------------------------------------------------//

//array destructuring
//take value from array into variable
const myArray = ["Value1", "Value2", "value3", "value4"];
const [var1, var2, ...myNewArray] = myArray;
console.log(var1);
console.log(var2);
console.log(myNewArray);
