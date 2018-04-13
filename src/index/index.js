import './index.scss';
let lampRed = document.querySelector(".lampRed");
let lampYellow = document.querySelector(".lampYellow");
let lampGreen = document.querySelector(".lampGreen");
let tumbler = document.querySelector(".tumbler");

let flag = false;

lampRed.onclick = lightRed;
lampYellow.onclick = lightYellow;
lampGreen.onclick = lightGreen;
tumbler.onclick = tumblerOn;

function lightRed() {
    if (flag === true) {
        lampRed.classList.toggle("lightRed");
        lampYellow.classList.remove("lightYellow");
        lampGreen.classList.remove("lightGreen");
    }
}

function lightYellow() {
    if (flag === true) {
        lampYellow.classList.toggle("lightYellow");
        lampRed.classList.remove("lightRed");
        lampGreen.classList.remove("lightGreen");
    }
}

function lightGreen() {
    if (flag === true) {
        lampGreen.classList.toggle("lightGreen");
        lampRed.classList.remove("lightRed");
        lampYellow.classList.remove("lightYellow");
    }
}

function tumblerOn() {
    tumbler.classList.toggle("tumblerOn");
    if (tumbler.classList.contains("tumblerOn")) {
        flag = true;
    } else {
        flag = false;
        lampRed.classList.remove("lightRed");
        lampYellow.classList.remove("lightYellow");
        lampGreen.classList.remove("lightGreen");
    }
}

