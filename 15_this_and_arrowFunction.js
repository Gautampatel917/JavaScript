const user = {
    username : "Gautam",
    price : 999,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);
    }
}

user.welcomeMessage();
user.username = "Bill"
user.welcomeMessage();

console.log(this)       //=> window is global object of window

function different(){
    console.log(this)
}

different()

// const addition = (num1, num2) => num1 + num2;        wrong way it's explicit return

const addition = (num1, num2) => (num1 + num2);         //implicit return

console.log(addition(20, 50));                      

