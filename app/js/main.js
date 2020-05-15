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


    $('.products__slider').slick({
        nextArrow: '<button type="button" class="prodSlick-btn prodSlick-next"></button>',
        prevArrow: '<button type="button" class="prodSlick-btn prodSlick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    $('.tabPopular').on('click', function() {
        $('.productsPage__inner.popular').show();
        $('.productsPage__inner.recent').hide();
        $('.tabPopular').css('background-color', '#434356');
        $('.tabRecent').css('background-color', '#ceced0');
    });

    $('.tabRecent').on('click', function() {
        $('.productsPage__inner.recent').show();
        $('.productsPage__inner.popular').hide();
        $('.productsPage__inner.recent').css('display', 'flex');
        $('.tabRecent').css('background-color', '#434356');
        $('.tabPopular').css('background-color', '#ceced0');

    });


    $('.dot.item1').on('click', function() {
        $('.steps__inner-item.item2').hide();
        $('.steps__inner-item.item3').hide();
        $('.steps__inner-item.item4').hide();
        $('.steps__inner-item.item1').show();
        $('.dot.item1').addClass('active');
        $('.dot.item2').removeClass('active');
        $('.dot.item3').removeClass('active');
        $('.dot.item4').removeClass('active');
    });

    $('.dot.item2').on('click', function() {
        $('.steps__inner-item.item1').hide();
        $('.steps__inner-item.item3').hide();
        $('.steps__inner-item.item4').hide();
        $('.steps__inner-item.item2').show();
        $('.steps__inner-item.item2').css('display', 'flex');
        $('.dot.item2').addClass('active');
        $('.dot.item1').removeClass('active');
        $('.dot.item3').removeClass('active');
        $('.dot.item4').removeClass('active');
    });

    $('.dot.item3').on('click', function() {
        $('.steps__inner-item.item1').hide();
        $('.steps__inner-item.item2').hide();
        $('.steps__inner-item.item4').hide();
        $('.steps__inner-item.item3').show();
        $('.steps__inner-item.item3').css('display', 'flex');
        $('.dot.item3').addClass('active');
        $('.dot.item1').removeClass('active');
        $('.dot.item2').removeClass('active');
        $('.dot.item4').removeClass('active');
    });

    $('.dot.item4').on('click', function() {
        $('.steps__inner-item.item1').hide();
        $('.steps__inner-item.item2').hide();
        $('.steps__inner-item.item3').hide();
        $('.steps__inner-item.item4').show();
        $('.steps__inner-item.item4').css('display', 'flex');
        $('.dot.item4').addClass('active');
        $('.dot.item1').removeClass('active');
        $('.dot.item2').removeClass('active');
        $('.dot.item3').removeClass('active');
    });


    // $('#pagination-container').pagination({
    //     dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    //     pageSize: 5,
    //     showPrevious: true,
    //     showNext: true,
    //     callback: function(data, pagination) {
    //         // template method of yourself
    //         var html = template(data);
    //         $('#data-container').html(html);
    //     }
    // })


    $('.down').click(function() {
        var $input = $(this).parent().find('input[type="number"]');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if (count < 10) { $input.val('0' + count); } else $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function() {
        var $input = $(this).parent().find('input[type="number"]');
        var count = parseInt($input.val()) + 1;
        count = count > 20 ? 1 : count;
        if (count < 10) { $input.val('0' + count); } else $input.val(count);
        $input.change();
        return false;
    });


});