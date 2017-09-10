/**
 * Created by tudor on 08/07/2017.
 */
$(document).ready(function () {
    $('.parallax-container').css('height', $(window).height() - $('nav').height());
    $('.parallax').parallax();
    $('ul.tabs').tabs({
        swipeable: true, onShow: function (tab) {
            console.log(tab);
            if (tab.selector === '#about') {
                setTimeout(function () {
                    $('#profileImage').addClass('scale-in');
                }, 700);
            }
        }
    });
    carouselHeight();
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
