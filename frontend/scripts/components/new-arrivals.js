function generateNewArrrivalsSwiper(thumbs) {
  const newArrivalsSwiperConfig = {
    slideClass: 'new-arrivals__slide',
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,

    watchOverflow: true,

    thumbs: {
      swiper: thumbs,
      slideThumbActiveClass: 'date_active',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    observer: true,
    observerParents: true,
    observeSlideChildren: true,
  };

  return generateSwipers('new-arrivals__swiper', newArrivalsSwiperConfig);
};

function renderIndexSwipers() {
  let thumbs = generateNewArrivalsDates();
  generateNewArrrivalsSwiper(thumbs[0]);
  generateItemsSwipers();
  generateCatalogItemSwipers();
};

renderIndexSwipers();
