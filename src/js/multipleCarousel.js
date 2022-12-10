const container = document.querySelector("#carouselNews");

if (window.matchMedia("(min-width: 992px)").matches) {
    let carousel = new bootstrap.Carousel(container, {
        interval: false,
    });
    const carouselInner = container.querySelector(".carousel-inner");
    const carouselWidth = carouselInner.scrollWidth;
    const card = container.querySelector(".carousel-item");
    const cardWidth = card.scrollWidth;

    let scrollPosition = 0;

    const carouselControlNext = container.querySelector(".carousel-control-next");
    const carouselControlPrev = container.querySelector(".carousel-control-prev");

    carouselControlNext.onclick = () => {
        console.log(carouselWidth, cardWidth, scrollPosition);
        if (scrollPosition < (carouselWidth - cardWidth * 3)) {
            scrollPosition += cardWidth;
            carouselInner.animate({
                scrollLeft: scrollPosition
            }, 600);
        }
    };

    carouselControlPrev.onclick = () => {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            carouselInner.animate({
                scrollLeft: scrollPosition
            }, 600);
        }
    };
}
else {
    container.className += " slide";
}
