
// weather panel

var days = $(".weather__days-nav").children()
var weatherContent = $(".weather__content")



days.each(function (i) {
    $(this).click(function () {
        days.css("border-bottom", "3px solid #fff");
        weatherContent.css("display", "none");
        $(this).css("border-bottom", "3px solid #5bc0ec");
        $(weatherContent[i]).css("display", "flex");
    })
});


// carousel options


$('.owl-carousel').owlCarousel({
    rtl: true,
    margin: 10,
    nav: true,
    dots: true,
    startPosition: 1,
    items: 1,
    navText: ["<div class='gallery__arrow-container gallery__arrow-container--right'> <i class='fas fa-angle-right gallery__arrow-right'></i></div>", "<div class='gallery__arrow-container gallery__arrow-container--left'> <i class='fas fa-angle-left gallery__arrow-left'></i></div>"]
})




