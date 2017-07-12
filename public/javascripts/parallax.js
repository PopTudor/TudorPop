/**
 * Created by tudor on 08/07/2017.
 */
$(document).ready(function () {
    $('.parallax').parallax();
    $('ul.tabs').tabs({swipeable: true});
    carouselHeight();
    console.log("loaded")
});

function carouselHeight() {
    var underParallax = document.querySelector('#underParallax').style.height;
    $('.tabs-content.carousel').css("height", $(window).height())
}
$(window).resize(function () {
    carouselHeight();
});
