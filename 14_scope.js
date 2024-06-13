// Scope level and mini hoisting in javascript

function one(){
    const userName = "Gautam"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);    we can't use inner variable.
    two()
}

one();