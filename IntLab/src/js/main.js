$(document).ready(function() {
    $('.burger-button').click(function(event) {
    $('.burger-wrapper').toggleClass('burger-wrapper-active');
    $('.header').toggleClass('header-active');
    $('.header-logo').toggleClass('header-logo-active');
    $('.tel').toggleClass('tel-active');
    $('.burger-button span').toggleClass('.active');
    $('.burger-button::after').toggleClass('.active');
    });
});