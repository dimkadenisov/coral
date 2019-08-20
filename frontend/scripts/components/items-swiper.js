function generateItemsSwipers() {
  const itemsSwiperConfig = {
    slideClass: 'catalog-item',
    slidesPerView: 5,
    spaceBetween: 30,

    watchOverflow: true,

    allowTouchMove: false,

    pagination: {
      el: '.pagination',
      bulletElement: 'div',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item_active',
    },

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
      },

      575: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  };

  return generateSwipers('items-swiper', itemsSwiperConfig);
};
