import './index.scss';
widget("#parentFirst");
widget("#parentSecond");

function widget(selectorId) {
    let rootElement = document.querySelector(selectorId);
    let btn = document.createElement("button");
    let block = document.createElement("div");
    btn.classList.add("parent_btn");
    btn.textContent = 'on/off';
    block.classList.add("parent_block");
    block.textContent = "Text";
    rootElement.appendChild(btn);
    rootElement.appendChild(block);
    // let block = rootElement.querySelector(".parent_block");

    btn.onclick = toggle;

    function toggle() {
        block.classList.toggle("hidden");
    }
}
