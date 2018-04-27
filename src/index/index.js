import './index.scss';
widget();
function widget() {
    let btnBurger = document.querySelector(".menu-burger");
    let menu = document.querySelector(".menu");

    btnBurger.addEventListener("click",toggle());

    function toggle() {
        menu.classList.toggle("opened")
    }
}