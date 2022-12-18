$(document).ready(function(){

$('.header-burger').click(function(event){


    $('.header-burger, .nav-wrapper').toggleClass('active');

    $('body').toggleClass('lock');
});

$('.products-gallery').slick({
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '80px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slick').slick({
    dots: false,
    infinite: true,
	touchThreshold : 100,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '80px',
    slidesToShow: 3,
    slidesToScroll: 3,
	centerMode: true,
	
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


});