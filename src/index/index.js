import './index.scss';
dropdown();
function dropdown() {
    let rootElement = document.querySelector(".accordion");
    let el = rootElement.querySelector(".accordion-btn-header");
    // let description = rootElement.querySelector(".description");

    let flag = el.classList.contains(".opened");

    el.addEventListener("click", () => {
        if (flag) {
            close();
        } else {
            open();
        }
    });

    function open() {
        el.classList.add(".opened");
    }
    function close() {
        el.classList.remove(".opened");
    }
}