function randomColor() {
    let colorCode = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colorCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorChanger = () => {
    const finalColor = randomColor();
    console.log(finalColor);
}

setInterval(colorChanger, 1000)