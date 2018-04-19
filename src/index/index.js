import './index.scss';
let accordion = document.querySelector(".accordion");

let button = document.createElement("button");
button.classList.add("accordion-btn-header");
accordion.appendChild(button);
button.textContent = "Header";

let discription = document.createElement("div");
discription.classList.add("accordion-description");
accordion.appendChild(discription);
discription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";






document.querySelectorAll(".accordion-btn-header").forEach((item) => {
    dropdown(item);
    console.log(item);
});


function dropdown(element) {
    element.addEventListener("click", (event)=> {
        event.target.classList.toggle("opened");
    });
}