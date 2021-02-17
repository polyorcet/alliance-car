gsap.registerPlugin(ScrollTrigger);

var advantage = $('.advantage'),
    catalogInner = $('.mainpage-catalog__body'),
    catalogImage = $('.mainpage-catalog__image');

var advTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#advantages"
     }
   });

   var catunitTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mainpage__catalog"
     }
   });
 

   advTl.staggerFrom(advantage, 1, {opacity: 0.6, y: 100, duration: 1, ease: "slow"}, 0.2);

   gsap.from($('.header__title'), 1, {opacity: 0.6, y: 50, duration: 1, ease: "slow"}, 0.2);
