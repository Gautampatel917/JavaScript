const tinderUser = {};

tinderUser.Id = "129xyz";
tinderUser.Name = "Gautam"
tinderUser.isLogged = false

console.table(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    fullname : {
        userFullname : {
            firstName: "John",
            lastName : "Tim"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

//cobain object ***********************************************

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3  = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2);
//const obj3 = Object.assign({}, obj1,obj2)   //=> give empty object and pass the reference of other objects.

const obj3 = {...obj1, ...obj2}
console.log(obj3)

/***************************************************************/

const user1 = [
    {
        id : 1,
        email : "user@gamil.com"
    },
    {
        id : 2,
        email : "user@gamil.com"
    },
    {
        id : 3,
        email : "user@gamil.com"
    }
]

console.log(user1[1].id)

console.log(Object.keys(tinderUser));   //=> DataType Array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));