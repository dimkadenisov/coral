let heroSwiper = new Swiper('.hero-swiper', {
  slideClass: 'hero-swiper__slide',
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    prevEl: '.button_icon_prev_gray',
    nextEl: '.button_icon_next_gray',
  },

  pagination: {
    el: '.pagination',
    bulletElement: 'div',
    bulletClass: 'pagination__item',
    bulletActiveClass: 'pagination__item_active',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  observer: true,
  observerParents: true,
  observeSlideChildren: true,
});
