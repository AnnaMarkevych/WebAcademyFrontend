import './index.scss';
widget("#parentFirst");
// widget("#parentSecond");

function widget(selecterId) {
    let rootElement = document.querySelector(selectorId);
    let btn = rootElement.querySelector(".parent_btn");
    let block = rootElement.querySelector(".parent_block");

    btn.onclick = toggle;

    function toggle() {
        block.classList.toggle("hidden");
    }
}