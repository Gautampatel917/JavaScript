const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('promise two resolved');
    }, 1000)
}).then(function () {
    console.log('promise two resolved1');
})