(function() {
  if ($('.items-swiper').length === 0) return;

  const breakpoints = [window.matchMedia( '(max-width: 991px)' ), window.matchMedia( '(max-width: 767px)' ), window.matchMedia( '(max-width: 575px)' )];

  let generateItemsSwipers;

  const breakpointChecker = function() {
    breakpoints.forEach((breakpoint) => {
      if (breakpoint.matches) return generateItemsSwipers();
    })
  };

  generateItemsSwipers = function() {
    const itemsSwipersNodes = $('.items-swiper');
    let swipers = {};

    itemsSwipersNodes.each(function(index) {
      $(this).addClass(`items-swiper-${index}`);

      swipers[index] = new Swiper(`.items-swiper-${index}`, {
        slideClass: 'catalog-item',
        slidesPerView: 5,
        spaceBetween: 30,

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
      })
    });
  };

  generateItemsSwipers();

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }
  breakpointChecker();
})();
