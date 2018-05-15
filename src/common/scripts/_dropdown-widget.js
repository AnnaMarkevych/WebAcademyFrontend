let menu = document.querySelector(".menu");

dropDownWidget(menu);

function dropDownWidget(menu) {
    let btnBurger = menu.querySelector(".menu-burger");

    btnBurger.addEventListener("click", () => {
        menu.classList.toggle("opened");
        event.stopPropagation();
    });
}




let footer = document.querySelector(".footer");

dropDownWidgetFooter(footer);

function dropDownWidgetFooter(footer) {
    let btnBurger = footer.querySelector(".menu-burger");

    btnBurger.addEventListener("click", () => {
        footer.classList.toggle("opened");
        event.stopPropagation();
    })
}