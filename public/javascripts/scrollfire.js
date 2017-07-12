/**
 * Created by tudor on 12/07/2017.
 */
$(document).ready(function () {
    var options = [
        {
            selector: '#stagger',
            offset: 3,
            callback: function (el) {
                Materialize.showStaggeredList($(el));
            }
        },
        {
            selector: '.other-class',
            offset: 200,
            callback: function () {
                customCallbackFunc();
            }
        }
    ];
    Materialize.scrollFire(options);
});