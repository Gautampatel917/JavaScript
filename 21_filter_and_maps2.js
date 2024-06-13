const myNumber = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums=myNumber.map((num) => num += 10)

const newNums = myNumber.map((num) => num * 10)         //multiply and add 10 plus it's call chaining
.map((num) => num += 10)
.filter((num) => num >= 40);

console.log(newNums);

//------------------------------------------------Reduce method

const myNums = [1, 2, 3]

/* const myTotal = myNums.reduce(function(acc,currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc + currVal
},0)
*/

const myTotal = myNums.reduce ((acc,currVal) => acc += currVal, 0)
console.log(myTotal);

// IN real life this method are use count the bill
const shoppingCart = [
    {
        itemName: "js Nodes",
        price: 2999
    },
    {
        itemName: "Python",
        price: 1499
    },
    {
        itemName: "app development",
        price: 2499
    },
    {
        itemName: "Data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);