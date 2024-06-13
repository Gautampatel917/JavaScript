
function myFunction(){
    console.log("Successfully execute");
}


/* 
const myFunction = function(){
    console.log("Successfully execute");
}
 */

/* 
const myFunction = () =>{
    console.log("successfully execute");
}
 */

//----------------------------Part 2-------------------------------------//

let passTheValue = (num2, num3 , ...num1) => {      // ...rest operator {based on uses , also declare in the last}
    return num1;
}

console.log(passTheValue(200,300,600,2000));

const user = {
    username : "Gautam",
    price : 999
}

let handleObject = (anyObject) => {
    console.log(`user ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);

handleObject({
    username : "Bill",
    price : 399
})

const newMyArray = [200, 400, 600];

function returnSecondValue(anyArray){
    console.log(`value is ${anyArray[1]}`);
}

// returnSecondValue(newMyArray);

returnSecondValue([200, 500, 1000]);