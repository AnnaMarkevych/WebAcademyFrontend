import './index.scss';

widgetTrafficLight("#firstTrafficLight");
widgetTrafficLight("#secondTrafficLight");
widgetTrafficLight("#thirdTrafficLight");
widgetTrafficLight("#foursTrafficLight");
widgetTrafficLight("#fivesTrafficLight");


function widgetTrafficLight(selectorId) {
    let rootElement = document.querySelector(selectorId);
    let lampRed = rootElement.querySelector(".lampRed");
    let lampYellow = rootElement.querySelector(".lampYellow");
    let lampGreen = rootElement.querySelector(".lampGreen");
    let tumbler = rootElement.querySelector(".tumbler");

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
}

