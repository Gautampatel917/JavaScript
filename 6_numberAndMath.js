const score = 400;

console.log(score);

const balance = new Number(100); // when you need define specific dataType.

console.log(balance) // -> result : [Number : 100];

console.log(balance.toString().length); // -> we can use toString() to convert to string and we use string methods and function.

console.log(balance.toFixed(2));

const anotherNumber = 112.84389;
console.log(anotherNumber.toPrecision(3));  // -> when you won't focus specific number of values.

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); // make coma indian types.

//Number.MAX_VALUE : show the maximum storage capacity.

//++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.round(3.5));
console.log(Math.floor(4.8) + " This is floor function"); // same work like round but there include value after (.) dot.
console.log(Math.sqrt(2));
console.log(Math.pow(3));
console.log(Math.min(34, 534, 53, 3));
console.log(Math.random());       // => most important : more of the time we use this method.

console.log((Math.random() * 10) + 10);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min * 1)) + min);     // => most important formula for generate random number in specific range.