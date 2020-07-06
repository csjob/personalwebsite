$(function () {
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
    });
});