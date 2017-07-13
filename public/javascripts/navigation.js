/**
 * Created by tudor on 13/07/2017.
 */
$("#home, #about, #skills, #projects, #work").click(function () {
    $('html, body').animate({
        scrollTop: $(document).offset().top
    }, 2000);
});