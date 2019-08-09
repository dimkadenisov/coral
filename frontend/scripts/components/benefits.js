(function() {
  if ($('.benefits__items').length === 0) return;

  const breakpoints = [window.matchMedia('(min-width: 768px)')];
  let benefitsSwiper;

  const breakpointChecker = function() {
    for (let i = 0; i < breakpoints.length; i++) {
      const breakpoint = breakpoints[i];

      if (breakpoint.matches) {
        if (benefitsSwiper !== undefined) benefitsSwiper.destroy(true, true);
        return;
      } else if (!breakpoint.matches) {
        if (benefitsSwiper !== undefined) benefitsSwiper.destroy();
        return enableSwiper();
      }
    }
  };

  const enableSwiper = function() {
    benefitsSwiper = new Swiper('.benefits__items', {
      breakpoints: {
        767: {
          slideClass: 'benefit-item',
          slidesPerView: 2,
          spaceBetween: 30,

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
        },

        575: {
          slideClass: 'benefit-item',
          slidesPerView: 1,
          spaceBetween: 0,

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
        }
      }
    });
  };

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    breakpoint.addListener(breakpointChecker);
  }

  breakpointChecker();
})();
