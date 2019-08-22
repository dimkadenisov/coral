const seenedItemsConfig = {
  slideClass: 'catalog-item',
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
    el: '.pagination',
    bulletElement: 'div',
    bulletClass: 'pagination__item',
    bulletActiveClass: 'pagination__item_active',
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

const seenedItemsBreakpoints =[767];

let seenedItemsSwiper = updateSwiperOnBreakpoint('seened-items__swiper', seenedItemsConfig, seenedItemsBreakpoints);
