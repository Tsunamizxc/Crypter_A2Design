$('.sellers__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


$('.collection__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.collection__nav'
});
$('.collection__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.collection__for',

});