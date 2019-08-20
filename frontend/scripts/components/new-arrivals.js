let newArrrivalsSwiper = $('.new-arrivals__swiper').length ? new Swiper('.new-arrivals__swiper', {
  slideClass: 'new-arrivals__slide',
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,

  watchOverflow: true,

  thumbs: {
    swiper: newArrivalsDates,
    slideThumbActiveClass: 'date_active',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  observer: true,
  observerParents: true,
  observeSlideChildren: true,
}) : false;

const updateSwiperInstance = function(swiper) {
  if(!swiper) return;
  const breakpoints = [window.matchMedia( '(max-width: 1199px)' ), window.matchMedia( '(max-width: 991px)' ), window.matchMedia( '(max-width: 767px)' ), window.matchMedia( '(max-width: 575px)' )];

  const breakpointChecker = function() {
    for (let i = 0; i < breakpoints.length; i++) {
      const breakpoint = breakpoints[i];

      if (breakpoint.matches) swiper.update();
    }
  };

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }
  breakpointChecker();
};

updateSwiperInstance(newArrrivalsSwiper);
