// свайп карусели вправо и влево

$(".carousel").swipe({
        swipe: function(
            event,
            direction,
            distance,
            duration,
            fingerCount,
            fingerData
        ) {
            if (direction == "left") $(this).carousel("next");
            if (direction == "right") $(this).carousel("prev");
            if (event.cancelable) event.preventDefault();
        },
        allowPageScroll: "vertical",

});
