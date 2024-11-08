$(document).ready(function(){


/* slider-area */
    $('.activ-slider').slick({
        infinite: true,
        arrows:false,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      /*counter-area*/

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*testimonial area*/
    $('.activ-testimonial').slick({
      infinite: true,
      arrows:false,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
    });


    /*brand area*/
    $('.activ-brand').slick({
      infinite: true,
      arrows:false,
      autoplay:true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    /*menu*/
    $('#mobile-menu-activ').meanmenu({
      meanScreenWidth: '991',
      meanMenuContainer: '.mobile-menu'
      
    });

   //wow
  



    //scrol up
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


 
   
    new WOW().init();

})

