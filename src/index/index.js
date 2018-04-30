import './index.scss';
let menu = document.querySelector(".menu");
let body = document.querySelector("body");

dropDownWidget(menu);

function dropDownWidget(menu) {
    let btnBurger = menu.querySelector(".menu-burger");

    btnBurger.addEventListener("click", () => {
        menu.classList.toggle("opened");
        event.stopPropagation();
    });


    // body.addEventListener("click", () => {
    //     menu.classList.remove("opened");
    // })
}