const container = document.querySelector("#carouselNews");
let carouselItems = container.querySelectorAll(".carousel-inner .carousel-item");

const button = document.querySelector(".greenButton");
// if (i !== carouselItems.length - 1) {
    //     nextSibling = carouselItems[i+1];
    //     clone = nextSibling.cloneNode(true);
    //     item.append(clone);
    //     console.log(item, i+1);
    // }
    // else {
    //     prevSibling = carouselItems[i-1];
    //     clone = prevSibling.cloneNode(true);
    //     item.append(clone)
    //     console.log(item, i-1)
    // }

carouselItems.forEach((item, i) => {
    length = 3;
    next = item.nextElementSibling;
    for (i = 1; i < length; i++) {
        if (!next) {
            next = carouselItems[0];
        }
        let cloneChild = next.cloneNode(true);
        item.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
        console.log(item);
    }
});
