//maps example : maps only takes unique value

const fruits = new Map([
    ['apple', 500],
    ['banana', 300],
    ['orange', 200],
    ['orange', 200]
])

console.table(fruits);

/* const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (items) => {
    console.log(items);
    return items;
})

console.log(values); */

//--------------------------------------Filtering Arrays
//filter & also create a new array and store value in that array

const myNumber = [1, 2, 3, 4, 5, 6, 7];

let newNums = myNumber.filter((num) => {
    return num > 4             //if open scope you must use return keyword
})
console.log(newNums)

//-------------------------------------forEach loop

let number1 = []

myNumber.forEach((num) => {
    if (num > 4) {
        number1.push(num)
    }
})

console.log(number1);

/* forEach method does not return anything but it can be used to perform an action on each item in the array.
In this case we are using arrow function and using push() method to add elements into empty array 'number1'.*/

//-------------------------------------------RealLife example



let userBooks = books.filter((bk) => bk.genre === 'History');

userBooks = books.filter((bk) => { return bk.publish >= 2000 && bk.genre > "History" })

console.log(userBooks)