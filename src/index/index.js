import './index.scss';
let button = document.createElement("button");
button.classList.add("accordion-btn-header");






document.querySelectorAll(".accordion-btn-header").forEach((item) => {
    dropdown(item);
    console.log(item);
});


function dropdown(element) {
    element.addEventListener("click", (event)=> {
        event.target.classList.toggle("opened");
    });
}