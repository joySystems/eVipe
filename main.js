$(document).ready(function(){

$('.header-burger').click(function(event){


    $('.header-burger, .nav-wrapper').toggleClass('active');

    $('body').toggleClass('lock');
});

});