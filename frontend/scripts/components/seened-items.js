(function() {
  if ($('.seened-items__swiper').length === 0) return false;

  const breakpoints = [window.matchMedia( '(max-width: 767px)' ), window.matchMedia( '(min-width: 768px)' )];

  const seenedItemsConfig = {
    slideClass: 'catalog-item',
    slidesPerView: 4,
    spaceBetween: 30,
    allowTouchMove: false,

    pagination: {},

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    navigation: {
      prevEl: '.prev',
      nextEl: '.next',
      disabledClass: 'visually-hidden'
    },

    observer: true,
    observerParents: true,
    observeSlideChildren: true,

    breakpoints: {
      1343: {
        slidesPerView: 3,
        pagination: {},
      },

      991: {
        slidesPerView: 3,
        pagination: {},
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
      if (breakpoint.matches) return generateSwipers('seened-items__swiper', seenedItemsConfig);
    })
  };

  generateSwipers('seened-items__swiper', seenedItemsConfig);

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }
  breakpointChecker();
})();
