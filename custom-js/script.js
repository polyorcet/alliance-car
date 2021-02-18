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
