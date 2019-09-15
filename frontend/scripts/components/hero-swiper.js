let heroSwiper = $('.hero-swiper').length ? new Swiper('.hero-swiper', {
  slideClass: 'hero-swiper__slide',
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  observer: true,
  observerParents: true,
  observeSlideChildren: true,
}) : false;
