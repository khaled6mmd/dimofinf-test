
// weather panel

var days = $(".weather__days-nav").children()
var weatherContent = $(".weather__content")

// burger menu

var menuIcon = $(".nav__mobile-icon")
var mobileMenu = $(".nav__contianer")
var menueState = false;

//  events menu

var eventMenueState = false;
var eventMenuIcon = $(".first-section__event-arrow--white")
var eventMenuIconUp = $(".first-section__event-arrow--up")
var eventSlide = $(".first-section__event-slide")

// weather

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
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    navText: ["<div class='gallery__arrow-container gallery__arrow-container--right'> <i class='fas fa-angle-right gallery__arrow-right'></i></div>", "<div class='gallery__arrow-container gallery__arrow-container--left'> <i class='fas fa-angle-left gallery__arrow-left'></i></div>"]
})



//  burger menu function


menuIcon.click(function () {
    if (!menueState) {
        mobileMenu.css("height", "46rem")
        menueState = true;
    } else {
        mobileMenu.css("height", "0")
        menueState = false;
    }
})



//  events menu function


eventMenuIcon.click(function () {
    if (!eventMenueState) {
        eventSlide.css("height", "15rem")
        eventMenuIconUp.css("height", "1rem")
        eventMenueState = true;
    } else {
        eventSlide.css("height", "0")
        eventMenuIconUp.css("height", "0rem")
        eventMenueState = false;
    }
})