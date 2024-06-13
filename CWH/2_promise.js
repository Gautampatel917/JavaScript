const promise1 = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random() * (100 - 1 * 1)) + 1
    console.log(a);
    if (a < 50) {
        reject("you don't have enough numbers");
    }
    else {
        resolve("you have enough numbers");
    }
})

const promise2 = new Promise((resolve, reject) => {
    resolve('promise resolved')
})

promise1.then((value) => {
    console.log(value);
})
    .catch((error) => console.log(error))


//some extra methods and properties

let promise3 = Promise.all([promise1], [promise2])      // all : show the which one is first execute
promise3.then((a) => console.log(a))
    .catch((error) => console.log(error))

let promise4 = Promise.allSettled([promise1], [promise2])      // allSettled : kuch bhi resulţ aajaye
promise3.then((a) => console.log(a))
    .catch((error) => console.log(error))

// promise3 = Promise.race([promise1], [promise2])  => race : check which one is fasted

//we also have some extra method like : resolve, reject 
//example : resolve([promise1], [promise2]);

let src = 'https://api.github.com/users/Gautampatel917';

let fetched = fetch(src);
let promise5 = fetched.then((response) => response.json())

//----------------------------------------------await() : make java script wait unties function not execute


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()
