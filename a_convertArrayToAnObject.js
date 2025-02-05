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

const obj = books.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
})

// console.log(obj)

console.log(obj['2'])

//destruction

const { genre, title, publish, edition } = obj['1'];  // just created variable that store array/obj value does't matter
//if you are change the position.

console.log(title); // Book Two
console.log(genre); // Non-Fiction
console.log(publish); // 1992
console.log(edition); // 2008