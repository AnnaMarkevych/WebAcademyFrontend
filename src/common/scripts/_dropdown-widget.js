let headerMenu = document.querySelector(".menu");

let footerMenu = document.querySelector(".footer");

dropDownWidget(headerMenu);
dropDownWidget(footerMenu);

function dropDownWidget(menu) {
    let btnBurger = menu.querySelector(".menu-burger");

    btnBurger.addEventListener("click", () => {
        menu.classList.toggle("opened");
        event.stopPropagation();
    });

}

