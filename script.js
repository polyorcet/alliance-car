gsap.registerPlugin(ScrollTrigger);

var advantage = $('.advantage');

var advTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#advantages"
     }
   });

 advTl.staggerFrom(advantage, 1, {opacity: 0, y: 100, duration: 1, ease: "power2"}, 0.2);




    $(document).ready(function(){
      $('.slides').slick({
        slidesToShow: 1,
        prevArrow: $('#prev'),
        nextArrow: $('#next')
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