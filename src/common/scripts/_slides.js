let slideArray = [
    {
        image: "slide1.jpg",
        positionX: 40,
        positionY: 45
    },
    {
        image: "slide2.jpg",
        positionX: 53,
        positionY: 95
    },
    {
        image: "slide3.jpg",
        positionX: 100,
        positionY: 60
    },
    {
        image: "slide1.jpg",
        positionX: 0,
        positionY: 50
    },
    {
        image: "slide1.jpg",
        positionX: 100,
        positionY: 90
    },
    {
        image: "slide1.jpg",
        positionX: 50,
        positionY: 50
    }
];

widgetSlider(document.querySelector(".slideshow"), slideArray);

function widgetSlider(rootEl, slides) {
    let htmlSliders = rootEl.querySelectorAll(".slider");
    let currentIndex = 10000000 * slides.length;
    review(currentIndex);

    let pagerButtons = rootEl.querySelectorAll(".pager");

    pagerButtons[0].addEventListener("click", () => {
        currentIndex--;
        review(currentIndex);
    });

    pagerButtons[1].addEventListener("click", () => {
        currentIndex++;
        review(currentIndex);
    });

    function review(startIndex) {
        console.log("----");
        htmlSliders.forEach((htmlItem) => {
            let index = startIndex % slides.length;
            console.log(index);
            startIndex++;
            let slide = slides[index];
            htmlItem.style.backgroundImage = "url('../../assets/images/" + slide.image + "')";
            htmlItem.style.backgroundPositionX = slide.positionX + "%";
            htmlItem.style.backgroundPositionY = slide.positionY + "%";
       })
    }
}