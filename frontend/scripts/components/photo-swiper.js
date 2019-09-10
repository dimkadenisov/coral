const photoSwiperConfig = {
  slideClass: 'photo-swiper__item',
  slidesPerView: 3,
  spaceBetween: 30,
  watchOverflow: true,
  allowTouchMove: false,

  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  observer: true,
  observerParents: true,
  observeSlideChildren: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      allowTouchMove: true,

      pagination: {
        dynamicBullets: true,
        el: '.pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
      },
    },

    575: {
      slidesPerView: 1,
      allowTouchMove: true,

      pagination: {
        dynamicBullets: true,
        el: '.pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
      },
    },
  },
};

let photoSwipers = generateSwipers({
  swiperClass: 'photo-swiper',
  swiperConfig: photoSwiperConfig
});
