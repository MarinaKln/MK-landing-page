$(document).ready(function () {
    var currentDate = new Date();
    var futureDate = new Date(2016, 10, 25, 0, 0, 0);
    var diff = Math.round((futureDate - currentDate) / 1000);

   clock = $('.timer').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        language: 'ru'
    });

    clock.setTime(diff);
    if (diff < 0) {
        clock.setTime(0);
    } else {
        clock.setTime(diff);
    }

    clock.setCountdown(true);
    clock.start();


    $('.my-slider').unslider({
        infinite: true,
        arrows: {
            prev: '<a class="unslider-arrow prev"></a>',
            next: '<a class="unslider-arrow next"></a>'
        }
    });

});