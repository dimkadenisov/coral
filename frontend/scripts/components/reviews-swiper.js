(function() {
  if ($('.reviews-swiper').length === 0) return false;

  const breakpoints = [window.matchMedia( '(max-width: 991px)' ), window.matchMedia( '(min-width: 992px)' )];

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
        },
      },
    },
  };

  let reviewsSwipers = generateSwipers('reviews-swiper', reviewsSwiperConfig);

  const breakpointChecker = function() {
    breakpoints.forEach(breakpoint => {
      if (breakpoint.matches) {
        reviewsSwipers.forEach(item => {
          item.destroy();
        });
        reviewsSwipers = generateSwipers('reviews-swiper', reviewsSwiperConfig);
      }
    })
  };

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }
  breakpointChecker();
})();
