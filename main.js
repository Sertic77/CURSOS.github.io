$(document).ready(function(){
    $('.fondo-1').slick({
      autoplay: true,
      autoplaySpeed:5000,
      arrows:false,
      pauseOnHover:false,
      fade:true,
      pauseOnFocus:false,
      draggable:false,
    });
    
  });

  $('.slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus:false,
    pauseOnHover:false,

    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
