anime({
  targets:'.header__title',
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeInOutSine'
});

anime({
  targets:'.mainpage-catalog__title',
  translateY: [60, 0],
  opacity: [0, 1],
  duration: 1000,
  delay: anime.stagger(300),
  easing: 'easeInOutSine'
});


$(document).ready(function(){
  $('.car-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    items:3,
    dots:false,
    autoplayTimeout:4000,
    responsiveClass:true,
    autoHeight :true,
    navText: '',
    navText:["<div class='nav-btn prev-slide'><img src='/img/prev-slide.svg'></div>","<div class='nav-btn next-slide'><img src='/img/next-slide.svg'></div>"],
    responsive : {
      0 : {
        items:1,
        nav:false,
        dots:false
      },
      420 : {
        items:1,
        nav:true,
        dots:false
      },
      768 : {
        items:1,
        nav:true,
        dots:false
      },
      992 : {
        items:3,
        nav:true,
        dots:false       
      }
  }
});
});


$(document).ready(function(){
  var mwidth = $(".car-page__title").width();
  $(".car-title__sub").width(mwidth);
  $(".header__car-price").width(mwidth);
});

$(window).resize(function(){
  var mwidth = $(".car-page__title").width();
  $(".car-title__sub").width(mwidth);
  $(".header__car-price").width(mwidth);
});



/* == Новое меню == */

$(document).ready(function(){
  $(".super_menu_toggler").click(function(){
    $(this).toggleClass('collapsed');
    $(".super_menu").toggleClass('hidden_menu');
  });

  /* Подменю */
  $(".super_menu_subtoggle").click(function(){
    var textlink = $(this).data('textlink');
    $(this).toggleClass('nav-link_back');
    if (!$(this).hasClass("nav-link_back")) {
      $(this).children('span').text(textlink);
    }
    $(".nav-link_back span").text('назад');
    $('.nav-link').not(this).each(function(){
      $(this).toggle();
   });

    $(this).next(".super_sub").toggleClass('hidden_sub');
  });
  /* Подменю */

});

/* == Новое меню == */