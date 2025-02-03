const promiseOne = new Promise(function (resolve, reject) {
    /* Do a async task
    DB connection, cryptography, network */
    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise consumed');
})

//---------------------------------------------method 2
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task2');
        resolve
    }, 1000);
}).then(function () {
    console.log('Async resolved')
}) 

//---------------------------------------pass the value in then()

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Dark knight', email: 'gautam@gmail.com' })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

//--------------------------------------- reject and nested then()

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'Dark knight', email: 'gautam@gmail.com' })
        }
        else {
            reject('Something went wrong')  //reject for error
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
    .then(function (userName) {
        console.log(userName);
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log('the promise either resolved or rejected ')
    })

//---------------------------------------------using async instance of then()

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'javaScript', password: 'i am the best' })
        }
        else {
            reject('ERROR: something wrong with JS')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log('error occurred')
    }
}

consumePromiseFive();

//----------------------------------------------await() : make java script wait unties function not execute

async function allUsers(){
    const response = fetch('https://api.github.com/users/Gautampatel917')
    const data = (await response).json()
    console.log(data)
}

allUsers()

//----------------------------------------------fetch()

fetch('https://api.github.com/users/Gautampatel917')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))