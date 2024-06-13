// when function must full fill argument in function

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// console.log(add(3))      => there give you error

console.log(add(3)(4)(3));


function sendEmail(to){
    return function (subject) {
        return function (body) {
            console.log(`sending email to ${to} with subject ${subject}: ${body}`)
        }
    }
}

step1 = sendEmail('gautam@gmail.com')
step2 = step1('bank related')

step2('your fd expired soon plz visit your nearest bank in tomorrow')