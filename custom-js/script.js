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
    responsiveClass:true,
    navText:["<div class='nav-btn prev-slide'><img src='/img/prev-slide.svg'></div>","<div class='nav-btn next-slide'><img src='/img/next-slide.svg'></div>"],
    responsive : {
      0 : {
        items:1,
        nav:false,
        dots:false
      },
      768 : {
        items:2,
        nav:false,
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
