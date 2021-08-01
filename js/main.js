$(document).ready(function() {
    $('.top__bar').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    $('.top__bar').fadeOut();


    $('.fa-bars').click(function(){
        $('.menu').toggleClass('active');
    });

    $('.slider__section').click(function(){
        $('.menu').removeClass('active');
    });

    $('.menu ul li').click(function(){
        $('.menu').removeClass('active');
    });


    
});


$(window).scroll(function(){

    if($(window).scrollTop() > 400){
        $('.top__bar').fadeIn();
    }
    else {
        $('.top__bar').fadeOut();
    }

});