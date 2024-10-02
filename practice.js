function changeColor() {
    const number = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += number[Math.floor(Math.random() * 16)];
    }
    return color;
}

myColor = changeColor();

console.log(myColor);