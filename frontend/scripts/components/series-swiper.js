const seriesSwiperConfig = {
  slideClass: 'series-item',
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: false,

  watchOverflow: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },

  pagination: {
    dynamicBullets: true,
    el: '.swiper-pagination',
  },

  observer: true,
  observerParents: true,
  observeSlideChildren: true,

  breakpoints: {
    1343: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 3,
    },

    767: {
      slidesPerView: 2,
      allowTouchMove: true,
    },

    575: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
  },
};

let seriesSwipers = generateSwipers({swiperClass: 'series-swiper', swiperConfig: seriesSwiperConfig});
