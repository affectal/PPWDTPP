$(function() {

    $('.bigSlider__inner').slick({
        nextArrow: '<button type="button" class="bigSlick-btn bigSlick-next"></button>',
        prevArrow: '<button type="button" class="bigSlick-btn bigSlick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });


    $('.newsSlider__inner').slick({
        nextArrow: '<button type="button" class="newsSlick-btn newsSlick-next"></button>',
        prevArrow: '<button type="button" class="newsSlick-btn newsSlick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

});