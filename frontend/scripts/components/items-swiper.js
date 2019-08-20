(function() {
  if ($('.items-swiper').length === 0) return false;

  const breakpoints = [window.matchMedia( '(max-width: 991px)' ), window.matchMedia( '(max-width: 767px)' ), window.matchMedia( '(max-width: 575px)' )];

  const itemsSwiperConfig = {
    slideClass: 'catalog-item',
    slidesPerView: 5,
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
      1343: {
        slidesPerView: 4,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 2,
        allowTouchMove: true,

        pagination: {
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
          el: '.pagination',
          bulletElement: 'div',
          bulletClass: 'pagination__item',
          bulletActiveClass: 'pagination__item_active',
        },
      },
    },
  };

  const breakpointChecker = function() {
    breakpoints.forEach((breakpoint) => {
      if (breakpoint.matches) return generateSwipers('items-swiper', itemsSwiperConfig);
    })
  };

  generateSwipers('items-swiper', itemsSwiperConfig);

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }
  breakpointChecker();
})();
