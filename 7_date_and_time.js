//Dates

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString('default', {       // we make custom format
    weekday: 'long',
    year: 'numeric',
    month: 'long',
}));

console.log(myDate.toDateString());
console.log(myDate.getFullYear());
console.log(typeof myDate);         //Date is object.

let myCreateDate = new Date(2023, 0, 23);   //month start with 0 in javaScript.
console.log(myCreateDate.toDateString());

let anotherDate = new Date("01-14-2024");   //mm-dd-yy
// console.log(anotherDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now() / 1000));     //convert to the second.

console.log(myDate.getMonth());
console.log(myDate.getDate());