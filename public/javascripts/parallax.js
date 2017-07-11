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
    $('.carousel.tabs-content').each(function () {
        var newHeight = $(this).find('.carousel-item img').height();
        var origStyle = $(this).attr('style');
        $(this).attr('style', origStyle + '; height: ' + newHeight + 'px ');
    });
}
$(window).resize(function () {
    carouselHeight();
});
