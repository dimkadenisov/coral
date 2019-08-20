function generateNewArrivalsDates() {
  const newArrivalsDatesConfig = {
    slideClass: 'date',
    slidesPerView: 7,
    spaceBetween: 0,

    allowTouchMove: false,

    observer: true,
    observerParents: true,
    observeSlideChildren: true,

    navigation: {
      prevEl: '.prev',
      nextEl: '.next',
    },

    breakpoints: {
      991: {
        slidesPerView: 4,
      },

      767: {
        slidesPerView: 2,

        allowTouchMove: true,
      },

      575: {
        slidesPerView: 3,
      },
    }
  };

  return generateSwipers('dates-swiper', newArrivalsDatesConfig);
};
