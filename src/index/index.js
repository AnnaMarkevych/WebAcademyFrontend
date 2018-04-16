import './index.scss';
widget("#parentFirst");
widget("#parentSecond");
widget("#parentThird");
widget("#parentFours");
widget("#parentFives");


function widget(selectorId) {
    let rootElement = document.querySelector(selectorId);
    let btn = document.createElement("button");
    let block = document.createElement("div");

    btn.classList.add("parent_btn");
    btn.textContent = 'on/off';
    block.classList.add("parent_block");
    block.textContent = "Text bbbbbbb";
    rootElement.appendChild(btn);
    rootElement.appendChild(block);
    // let block = rootElement.querySelector(".parent_block");

    btn.onclick = toggle;

    function toggle() {
        block.classList.toggle("hidden");
    }
}
