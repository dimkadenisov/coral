let seenedItems = $('.seened-items__swiper').length ? new Swiper('.seened-items__swiper', {
  slideClass: 'catalog-item',
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: false,

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
    },
  },
}) : false;
