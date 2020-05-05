$(function() {

    $('.line__box').on('click', function() {
        $('.header__dropDown-menu').slideToggle();
    });

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


    $('.product__slider').slick({
        nextArrow: '<button type="button" class="prodSlick-btn prodSlick-next"></button>',
        prevArrow: '<button type="button" class="prodSlick-btn prodSlick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    $('.tabPopular').on('click', function() {
        $('.productPage__inner.popular').show();
        $('.productPage__inner.recent').hide();
        $('.tabPopular').css('background-color', '#434356');
        $('.tabRecent').css('background-color', '#ceced0');
    });

    $('.tabRecent').on('click', function() {
        $('.productPage__inner.recent').show();
        $('.productPage__inner.popular').hide();
        $('.productPage__inner.recent').css('display', 'flex');
        $('.tabRecent').css('background-color', '#434356');
        $('.tabPopular').css('background-color', '#ceced0');

    });

});