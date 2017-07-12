/**
 * Created by tudor on 08/07/2017.
 */
$(document).ready(function () {
    $('.parallax').parallax();
    $('ul.tabs').tabs({swipeable: true});
    carouselHeight();
    console.log("loaded");
});

function carouselHeight() {
    var cardList = $('#stagger');
    var cardListLength = $("#stagger li").length;
    console.log(cardListLength);
    $('.tabs-content.carousel').css("height", $(window).height() + cardList[0].scrollHeight)
}

$(window).resize(function () {
    carouselHeight();
});
