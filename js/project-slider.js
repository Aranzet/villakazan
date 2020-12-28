$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000
});

// Слайдер проектов
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
    $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    cssEase: 'linear',
    arrows: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            vertical: false,
            verticalSwiping: false,
          }
        }
    ]
});