import './index.scss';
widget("#parentFirst");
widget("#parentSecond");

function widget(selectorId) {
    let rootElement = document.querySelector(selectorId);
    let btn = document.createElement("div");
    btn.classList.add("parent_btn");
    btn.textContent = 'on/off';
    rootElement.appendChild(btn);
    let block = rootElement.querySelector(".parent_block");

    btn.onclick = toggle;

    function toggle() {
        block.classList.toggle("hidden");
    }
}
