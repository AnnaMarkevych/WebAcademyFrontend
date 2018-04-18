import './index.scss';
dropdown();
function dropdown() {
    let rootElement = document.querySelector(".accordion");
    let accordionItem = rootElement.querySelector(".accordion-btn-header");

    accordionItem.addEventListener("click", () => {
        toggle();
    });

    function toggle() {
        accordionItem.classList.add("opened");
    }
}