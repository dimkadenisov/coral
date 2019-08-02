let newArrivalsDates = new Swiper('.dates-swiper', {
  slideClass: 'date',
  slidesPerView: 7,
  spaceBetween: 0,

  allowTouchMove: false,

  observer: true,
  observerParents: true,
  observeSlideChildren: true,

  breakpoints: {
    991: {
      slidesPerView: 4,

      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
    },

    767: {
      slidesPerView: 2,

      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
    },

    575: {
      slidesPerView: 3,

      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
    },
  }
});
