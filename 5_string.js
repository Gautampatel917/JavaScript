const name = "Gautam";
const repoCount = 3;

// console.log(name + repoCount);
// instance of above method you can use below method

console.log(`Hello my name is ${name} and my repository in github is ${repoCount}`);

const gameName = new String('Gautam');

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log(gameName.__proto__); // it's show the prototype of string. and also we can add custom method in string 
console.log(gameName.reverse());// it's show the reverse of string.
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // a character
console.log(gameName.indexOf('m')); // 5th index

const newString = gameName.substring(0, 4); // start and end number there store as substring
console.log(newString);

const anotherString = gameName.slice(-2, 2);    //same work line substring.
console.log('slice: ' + anotherString);

const otherString = " Gautam ";
console.log(otherString);
console.log(otherString.trim()); //trim are use for remove white space in string  it's use in form.

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));

console.log(url.includes("gautam"));    //check it's available or not   

const str1 = "my name is gautam and i am student of computer science";
console.log(str1.split('-')); 