$(document).ready(function () {

    'use strict';



    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    $('.navbar ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.portfolio .col-md').css('opacity', 1);
        }
        else {
            $('.portfolio .col-md').css('opacity', '.2');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

    $('.carousel').carousel({
        interval: 5000
    });

    window.sr = ScrollReveal();
    sr.reveal('.container', { duration: 1000 });
    sr.reveal('.row', { duration: 1000 });
    sr.reveal('.testimonial', { duration: 1000 });
});

$(window).on("load", function () {
    $('.overlay-loading .loader').fadeOut(4000, function () {
        $('.overlay-loading').fadeOut(1000);
        $('body').css('overflow', 'auto');
    });
});

