//trigger nice scroll
$("body").niceScroll();

$('.header').height($(window).height());



$('.header .arrow i').click(function() {


    $('html , body').animate({

        scrollTop: $('.featuers').offset().top

    }, 1000);

});


$('.hire').click(function() {

    $('html , body').animate({

        scrollTop: $('.our-team').offset().top

    }, 1000);
});


$('.show-more').click(function() {
    $('.hidden').toggle(500);
});


// start testimonials


var right = $('.testim .fa-chevron-right'),
    leftArrow = $('.testim .fa-chevron-left');


function checktest() {

    $('.clint:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
    $('.clint:last').hasClass('active') ? right.fadeOut() : right.fadeIn();

}


checktest();



$('.testim i').click(function() {


    if ($(this).hasClass('fa-chevron-right')) {


        $('.testim .active').fadeOut(100, function() {


            $(this).removeClass('active').next('.clint').addClass('active').fadeIn();

            checktest();


        });


    } else {

        $('.testim .active').fadeOut(100, function() {


            $(this).removeClass('active').prev('.clint').addClass('active').fadeIn();

            checktest();


        });
    }
});