$(document).ready(function() {
    $('.burger__button').click(function(event) {
    $('.burger-wrapper').toggleClass('burger-wrapper-active');
    $('.header').toggleClass('header-active');
    $('.header-logo').toggleClass('header-logo-active');
    $('.tel').toggleClass('tel-active');
    $('button.burger__button').toggleClass('button.burger__button___active');
    $('button.burger__button::after').toggleClass('.active');
    $('body').toggleClass('.lock');
    });
});



var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.slider-pagination',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
    },
      type: 'fraction'
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev'
    },
  });


  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $("header").addClass("scroll");
            } else {
        $("header").removeClass("scroll");
    }
});