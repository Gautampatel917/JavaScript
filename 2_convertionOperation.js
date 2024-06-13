//check the typeof variable - because value comes from form so you dont know it's string or number.

let score = "33";
console.log(typeof (score));

let score2 = Number(score);
console.log(typeof (score2));

console.log(typeof (null));      //Null value is object.

//true =>1, false =>0

let isLoggedIn = 1;

let decision = Boolean(isLoggedIn);     // always first letter is capital.

console.log(decision);

/**************-Operations-***************/

let value = 3;
let negative = -value;      // store negative value of positive value.

console.log(negative);

let str1 = "Gautam";
let str2 = "Malaviya";

console.log(str1 + str2);

/* console.log(+true)   => make true;
console.log(+"");       => make false */