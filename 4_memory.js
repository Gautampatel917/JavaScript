/* 
    stack(primitive)
    heap(non-primitive)
*/

// stack example

let userName = "Gautam";

let anotherUser = userName;

anotherUser = "Bill";

console.log(userName);

console.log(anotherUser);  // -> their not change the value of userName because  user name just pass  the value/copy 

//Heap

let userOne = {
    email : "user@gamil.com",
    password: "123456"
}

let userTwo = userOne;

userTwo.email = "gautam@gmail.com" // -> their also change value of userOne because it's reference of userOne their both take value from the heap.

console.table(userOne);
console.table(userTwo);

let array = ["Gautam", "malaviya", "vishva", "shahad", "krishana"];

let array1 = array;

array1[1] = "Gautam";   // --> if you are change any reference types variable   there also changed in another variable.
console.log(array);
console.log(array1);

