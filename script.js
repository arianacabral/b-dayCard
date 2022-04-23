const textElement = document.getElementById('text');
const text = "Happy Birthday!";

let idx = 1;
let speed = 200;

writeText();

function writeText() {
    
    textElement.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
};