import './index.scss';
dropdown("#headerFirst");
dropdown("#headerSecond");

function dropdown(SelectorId) {
    let rootElement = document.querySelector(SelectorId);
    let description = rootElement.querySelector(".accordion-description");

    let flag = description.classList.contains("opened");

    function toggle () {
        el.addEventListener("click", () => {
            if (flag) {
                close();
            } else {
                open();
            }
        });
    }
    toggle();

    function open() {
        flag = true;
        description.classList.add("opened");
    }
    function close() {
        flag = false;
        description.classList.remove("opened");
    }
}