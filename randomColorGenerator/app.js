const randomNumber=(min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomRGB = () => [
    randomNumber(0, 255),
    randomNumber(0, 255),
    randomNumber(0,255)
];

const currentValueSpan = document.getElementById("value");

document.getElementById("generate").addEventListener("click", function(e){
    const rgb = randomRGB();
    const content = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

    document.documentElement.style.setProperty('--current-value', content);
    currentValueSpan.textContent = content
})