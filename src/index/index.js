import './index.scss';
document.querySelectorAll(".accordion-btn-header").forEach((item) => {
    dropdown(item);
    console.log(item);
});


function dropdown(element) {
    element.addEventListener("click", (event)=> {
        event.target.classList.toggle("opened");
    });

    // let description = rootElement.querySelector(".accordion-description");
    //
    // let flag = description.classList.contains("opened");
    //
    // function toggle () {
    //     el.addEventListener("click", () => {
    //         if (flag) {
    //             close();
    //         } else {
    //             open();
    //         }
    //     });
    // }
    // toggle();
    //
    // function open() {
    //     flag = true;
    //     description.classList.add("opened");
    // }
    // function close() {
    //     flag = false;
    //     description.classList.remove("opened");
    // }
}