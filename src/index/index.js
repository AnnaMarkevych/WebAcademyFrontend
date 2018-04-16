import './index.scss';

const globalLamps = document.querySelectorAll(".globalLamp");
globalLamps.forEach((globalLamp) => {
   widgetTrafficLight(globalLamp);
});


function widgetTrafficLight(rootElement) {
    let lamps = rootElement.querySelectorAll(".lamp");
    let tumbler = rootElement.querySelector(".tumbler");
    let flag = false;

    tumbler.onclick = tumblerOn;

    lamps.forEach((item) => {
        item.onclick = mouseClick;
    });

    function mouseClick(event) {
        if (flag) {
            const lamp = event.target;
            let wasLampEnabled = lamp.classList.contains("enabled");

            disableAllLamps();

            if (!wasLampEnabled) {
                lamp.classList.add("enabled");
            }
        }
    }


    function tumblerOn() {
        tumbler.classList.toggle("tumblerOn");
        if (tumbler.classList.contains("tumblerOn")) {
            flag = true;
            tumbler.innerHTML = "On";
        } else {
            flag = false;
            tumbler.innerHTML = "Off";

            disableAllLamps();
        }
    }

    function disableAllLamps() {
        lamps.forEach((item) => {
            item.classList.remove("enabled");
        });
    }
}

