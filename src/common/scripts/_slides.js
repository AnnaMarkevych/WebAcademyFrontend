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
        image: "chees.jpg",
        positionX: 0,
        positionY: 50
    },
    {
        image: "corn.jpg",
        positionX: 100,
        positionY: 90
    },
    {
        image: "eggs.jpg",
        positionX: 50,
        positionY: 50
    }
];

widgetSlider(document.querySelector(".slideshow"), slideArray);


function widgetSlider(rootElement, objs) {
    const arraySliders = rootElement.querySelectorAll(".slider");
    let pagerButtons = rootElement.querySelectorAll(".pager");
    let currentIndex = 0;

    reviewAllSlides(currentIndex);

    function reviewAllSlides(i) {
        arraySliders.forEach((item) => {
            reviewSlide(item, objs[i]);
            i++;
            if (i >= objs.length) {
                i = 0;
            }
        })
    }

    function reviewSlide(htmlSlide, obj) {
        htmlSlide.style.backgroundImage = "url('../../assets/images/" + obj.image + "')";
        htmlSlide.style.backgroundPositionX = obj.positionX + "%";
        htmlSlide.style.backgroundPositionY = obj.positionY + "%";
    }

    pagerButtons[1].addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= objs.length) {
            currentIndex = 0;
        }
        reviewAllSlides(currentIndex);
    });

    pagerButtons[0].addEventListener("click", () => {
        currentIndex--;
        if (currentIndex <= -1) {
            currentIndex = objs.length - 1;
        }
        reviewAllSlides(currentIndex);
    });

}
