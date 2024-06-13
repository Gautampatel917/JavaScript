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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History');

userBooks = books.filter((bk) => {return bk.publish >= 2000 && bk.genre > "History"})

console.log(userBooks)