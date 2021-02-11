gsap.registerPlugin(ScrollTrigger);

var advantage = $('.advantage');
    /*opened_nav = $('.nav-bar_opened');*/

var advTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#advantages"
     }
   });
   /*menuTl = gsap.timeline();*/

 advTl.staggerFrom(advantage, 1, {opacity: 0, y: 100, duration: 1, ease: "power2"}, 0.2);

 /*menuTl.from(opened_nav, 1, {opacity: 0, y: 100, duration: 1, ease: "power2"}, 0);
 menuTl.paused(true);*/


    $(document).ready(function(){
      $('.slides').slick({
        slidesToShow: 1,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        responsive: [
          {
            breakpoint: 480,
            settings: {
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }
        ]
      });
    });

    $('#burger').on('click', function(e) {
    $(this).toggleClass('burger_closed burger_opened');
    $('#nav-bar').toggleClass('nav-bar_closed nav-bar_opened');
    e.preventDefault();
  });


  $(function(){
    if ($(window).width() <= '768'){
    $('#slides').removeClass( "slides" );
    }else{
      $('#slides').addClass( "slides" );
    }
    $(window).resize(function(){
      if ($(window).width() <= '768'){
        $('#slides').removeClass( "slides" );
        }else{
          $('#slides').addClass( "slides" );
        }
    });
  });