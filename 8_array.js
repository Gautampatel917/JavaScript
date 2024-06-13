//array

const myArr = [0, 1, 4, 5, 10];

const myArr1 = new Array(92, 394, 59, 49);
console.log(myArr1[0]);

//Array methods

myArr.push(10);     // push in the last
myArr.pop()         // remove element from the last
myArr.unshift(10)   // insert element in front but there make load in machine.
myArr.shift();      //remove unshift value from the array.

console.log(myArr.includes(9)); //true and false
console.log(myArr.indexOf(5));
console.log(myArr);

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);          // => not include range
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3);        // => their remove poison of the given range
console.log(myn2);
console.log("Original",myArr);