const testimonialsSlider = $('.testimonials__slider');

testimonialsSlider.slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slick-prev').hide();

testimonialsSlider.on('afterChange', function (event, slick, currentSlide) {
    let totalSlides = slick.slideCount;

    if (currentSlide === 0) {
        $('.slick-prev').hide();
    } else {
        $('.slick-prev').show();
    }

    if (currentSlide >= totalSlides - slick.options.slidesToShow) {
        $('.slick-next').hide();
    } else {
        $('.slick-next').show();
    }
});