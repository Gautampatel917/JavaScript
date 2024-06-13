let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('success'), 1000)
})

promise.then((value) => console.log(value))

//asynchronous : not existing or occurring at the same time

async function getPromise(){
    const url = fetch('https://api.github.com/users/Gautampatel917');
    const response = await url;
    const data = await response.json();
    console.log(data);
}

getPromise();

console.log('promise run after there load');

//fetch

fetch('https://api.github.com/users/Gautampatel917')
.then((value) => console.log(value))
.catch((error) => console.log(error))
.finally(() => console.log('function execute successfully'))