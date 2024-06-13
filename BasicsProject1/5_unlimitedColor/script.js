//generate random color

let randomColor = function(){
/*     let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")"; */
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)] //16 is give position of hex
    }
    return color;
}

const start = document.getElementById('start')
const stop = document.getElementById('stop')
let myInterval;

const startChanging = function(){
    myInterval = setInterval(changeColor, 2000);

    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChanging = function(){
    clearInterval(myInterval);
    myInterval = null;
}

start.addEventListener('click', startChanging)
stop.addEventListener('click', stopChanging)