const form = document.querySelector('form');

form.addEventListener('submit', function (sub) {
    sub.preventDefault()    //stop default action

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result');

    if (height === ' ' || height <= 0 || isNaN(height)) {
        result.innerHTML = "give valid information";
    }
    else if (weight === ' ' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "give valid information";
    }
    else {
        const bmi = weight / ((height * height) / 10000).toFixed(2);
        if (bmi < 18.5) {
            result.innerHTML = `<span>${bmi}</span>`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `<span>${bmi}</span>`
        }
        else {
            result.innerHTML = `<span>${bmi}</span>`
        }
    }
})