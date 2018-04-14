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
    if (flag) {
        lampRed.classList.toggle("lightRed");
        lampYellow.classList.remove("lightYellow");
        lampGreen.classList.remove("lightGreen");
    }
}

function lightYellow() {
    if (flag) {
        lampYellow.classList.toggle("lightYellow");
        lampRed.classList.remove("lightRed");
        lampGreen.classList.remove("lightGreen");
    }
}

function lightGreen() {
    if (flag) {
        lampGreen.classList.toggle("lightGreen");
        lampRed.classList.remove("lightRed");
        lampYellow.classList.remove("lightYellow");
    }
}

function tumblerOn() {
    tumbler.classList.toggle("tumblerOn");
    if (tumbler.classList.contains("tumblerOn")) {
        flag = true;
        tumbler.innerHTML = "on";
    } else {
        flag = false;
        tumbler.innerHTML = "off";
        lampRed.classList.remove("lightRed");
        lampYellow.classList.remove("lightYellow");
        lampGreen.classList.remove("lightGreen");
    }
}

