import './index.scss';
function addClassOpen(htmlElement) {
    htmlElement.addEventListener("click", (event) => {
        htmlElement.classList.toggle("open");

        console.log("Click " + htmlElement);
        event.stopPropagation();
    });
}
const tests = document.querySelectorAll(".test");
tests.forEach((item) => {
    addClassOpen(item);
});

const body = document.querySelector("body");
body.addEventListener("click", () => {
    tests.forEach((item) => {
        item.classList.remove("open");
        console.log("Remove");
    })
});

