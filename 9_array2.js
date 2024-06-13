const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Batman", "Flash"];
/* 
marvel_heros.push(dc_heros);
console.log(marvel_heros);

console.log(marvel_heros[3][1]);
 */

/* 
const newArr = marvel_heros.concat(dc_heros); 
console.log(newArr); */

const newHeros = [...marvel_heros, ...dc_heros];    //spread operator[...]
console.log(newHeros);

const un_managed = [1, 2, 4, [5, 6, 7], 8, 9[3, 2, [3, 2]]];

const managed_arr = un_managed.flat(Infinity);
console.log(managed_arr);

console.log(Array.isArray("Gautam"));
console.log(Array.from("Gautam"));      //convert to the array.
console.log(Array.from({name: "Gautam"}));      //if their could not make array it's give empty array (interview perspective)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));