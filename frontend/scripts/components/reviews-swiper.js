const reviewsSwiperConfig = {
  slideClass: 'review',
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,

  allowTouchMove: false,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  observer: true,
  observerParents: true,
  observeSlideChildren: true,

  breakpoints: {
    991: {
      slideClass: 'review',
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,

      allowTouchMove: true,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      observer: true,
      observerParents: true,
      observeSlideChildren: true,

      pagination: {
        el: '.pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
        clickable: true,
      },
    },
  },
};

const reviewsSwiperBreakpoints = [991];

let reviewsSwipers = updateSwiperOnBreakpoint('reviews-swiper', reviewsSwiperConfig, reviewsSwiperBreakpoints);
